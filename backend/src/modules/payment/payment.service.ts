import type { VerifyPaymentBody } from "./payment.types.js";
import { PaymentStatus } from "./payment.constants.js";
import ClickModel from "../click/click.model.js";
import PaymentModel from "./payment.model.js";
import env from "../../config/env.js";
import razorpay from "./razorpay.js";
import crypto from "crypto";

export const createOrder = async (amount: number) => {
  if (Number.isNaN(amount)) {
    throw new Error("Amount must be a valid number.");
  }

  if (amount < 1 || amount > 5000) {
    throw new Error("Amount must be between ₹1 and ₹5000.");
  }

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
  });

  await PaymentModel.create({
    amount,
    status: PaymentStatus.CREATED,
    razorpayOrderId: order.id,
  });

  return order;
};

export const verifyPaymentService = async (body: VerifyPaymentBody) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    throw new Error("Missing payment details.");
  }

  const session = await PaymentModel.startSession();

  try {
    session.startTransaction();

    const payment = await PaymentModel.findOne({
      razorpayOrderId: razorpay_order_id,
    }).session(session);

    if (!payment) {
      throw new Error("Payment order not found.");
    }

    if (payment.status !== PaymentStatus.CREATED) {
      throw new Error("Payment has already been processed.");
    }

    const existingPayment = await PaymentModel.findOne({
      razorpayPaymentId: razorpay_payment_id,
    }).session(session);

    if (existingPayment) {
      throw new Error("Duplicate payment detected.");
    }

    const generatedSignature = crypto
      .createHmac("sha256", env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest();

    const receivedSignature = Buffer.from(razorpay_signature, "hex");

    if (
      generatedSignature.length !== receivedSignature.length ||
      !crypto.timingSafeEqual(generatedSignature, receivedSignature)
    ) {
      payment.status = PaymentStatus.FAILED;

      await payment.save({ session });

      await session.commitTransaction();

      return {
        success: false,
        message: "Invalid payment signature.",
      };
    }

    payment.status = PaymentStatus.SUCCESS;
    payment.razorpayPaymentId = razorpay_payment_id;
    payment.razorpaySignature = razorpay_signature;

    await payment.save({ session });

    const click = await ClickModel.findOne().session(session);

    if (!click) {
      throw new Error("Click document not found.");
    }

    click.paidClicks += 1;

    await click.save({ session });

    await session.commitTransaction();

    return {
      success: true,
      message: "Payment verified successfully.",
      freeClicks: click.freeClicks,
      paidClicks: click.paidClicks,
    };
  } catch (error) {
    await session.abortTransaction();

    throw error;
  } finally {
    session.endSession();
  }
};

export const getPaymentHistory = async () => {
  const payments = await PaymentModel.find().sort({ createdAt: -1 }).lean();

  return payments;
};
