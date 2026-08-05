import crypto from "crypto";
import ClickModel from "../click/click.model.js";
import env from "../../config/env.js";
import PaymentModel from "./payment.model.js";
import razorpay from "./razorpay.js";

import {
  MAX_PAYMENT_AMOUNT,
  MIN_PAYMENT_AMOUNT,
  PAYMENT_CURRENCY,
  PaymentStatus,
  RAZORPAY_CAPTURE_EVENT,
  RAZORPAY_FAILED_EVENT,
} from "./payment.constants.js";

import type {
  CreateOrderBody,
  RazorpayWebhookPayload,
  VerifyPaymentBody,
  VerifyPaymentResponse,
} from "./payment.types.js";

export const createOrder = async (amount: CreateOrderBody["amount"]) => {
  if (!Number.isFinite(amount)) {
    throw new Error("Amount must be a valid number.");
  }

  if (amount < MIN_PAYMENT_AMOUNT || amount > MAX_PAYMENT_AMOUNT) {
    throw new Error(
      `Amount must be between ₹${MIN_PAYMENT_AMOUNT} and ₹${MAX_PAYMENT_AMOUNT}.`,
    );
  }

  const order = await razorpay.orders.create({
    amount: Math.round(amount * 100),
    currency: PAYMENT_CURRENCY,
  });

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  await PaymentModel.create({
    amount,
    status: PaymentStatus.PENDING,
    razorpayOrderId: order.id,
    expiresAt,
  });

  return order;
};

//=============================== Helper hai ye

const markPaymentAsSuccess = async (
  razorpayOrderId: string,
  razorpayPaymentId: string,
  session: Awaited<ReturnType<typeof PaymentModel.startSession>>,
  razorpaySignature?: string,
): Promise<VerifyPaymentResponse> => {
  const update: {
    status: PaymentStatus;
    razorpayPaymentId: string;
    razorpaySignature?: string;
  } = {
    status: PaymentStatus.SUCCESS,
    razorpayPaymentId,
  };

  if (razorpaySignature) {
    update.razorpaySignature = razorpaySignature;
  }

  const payment = await PaymentModel.findOneAndUpdate(
    {
      razorpayOrderId,
      status: PaymentStatus.PENDING,
    },
    {
      $set: update,
    },
    {
      new: true,
      session,
    },
  );

  if (!payment) {
    const existing = await PaymentModel.findOne({
      razorpayOrderId,
    }).session(session);

    if (!existing) {
      throw new Error("Payment order not found.");
    }

    const click = await ClickModel.findOne().session(session);

    if (!click) {
      throw new Error("Click document not found.");
    }

    return {
      success: true,
      message: "Payment already processed.",
      freeClicks: click.freeClicks,
      paidClicks: click.paidClicks,
    };
  }

  const click = await ClickModel.findOne().session(session);

  if (!click) {
    throw new Error("Click document not found.");
  }

  click.paidClicks += 1;

  await click.save({ session });

  return {
    success: true,
    message: "Payment verified successfully.",
    freeClicks: click.freeClicks,
    paidClicks: click.paidClicks,
  };
};

//

const markPaymentAsFailed = async (
  razorpayOrderId: string,
  session: Awaited<ReturnType<typeof PaymentModel.startSession>>,
) => {
  return PaymentModel.findOneAndUpdate(
    {
      razorpayOrderId,
      status: PaymentStatus.PENDING,
    },
    {
      $set: {
        status: PaymentStatus.FAILED,
      },
    },
    {
      new: true,
      session,
    },
  );
};

//===============================

export const verifyPaymentService = async (
  body: VerifyPaymentBody,
): Promise<VerifyPaymentResponse> => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    throw new Error("Missing payment details.");
  }

  const generated = crypto
    .createHmac("sha256", env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest();

  const received = Buffer.from(razorpay_signature, "hex");

  if (
    generated.length !== received.length ||
    !crypto.timingSafeEqual(generated, received)
  ) {
    throw new Error("Invalid payment signature.");
  }

  const session = await PaymentModel.startSession();

  try {
    session.startTransaction();

    const existingPayment = await PaymentModel.findOne({
      razorpayPaymentId: razorpay_payment_id,
    }).session(session);

    if (existingPayment) {
      throw new Error("Duplicate payment detected.");
    }

    const result = await markPaymentAsSuccess(
      razorpay_order_id,
      razorpay_payment_id,
      session,
      razorpay_signature,
    );

    await session.commitTransaction();

    return result;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const handleWebhook = async (payload: RazorpayWebhookPayload) => {
  const payment = payload.payload.payment.entity;

  const session = await PaymentModel.startSession();

  try {
    session.startTransaction();

    switch (payload.event) {
      case RAZORPAY_CAPTURE_EVENT: {
        await markPaymentAsSuccess(payment.order_id, payment.id, session);
        break;
      }
      case RAZORPAY_FAILED_EVENT: {
        await markPaymentAsFailed(payment.order_id, session);
        break;
      }
      default:
        await session.commitTransaction();

        return {
          success: true,
          message: "Webhook event ignored.",
        };
    }

    await session.commitTransaction();

    return {
      success: true,
    };
  } catch (error) {
    await session.abortTransaction();

    throw error;
  } finally {
    session.endSession();
  }
};

export const getPaymentHistory = async () => {
  return PaymentModel.find().sort({ createdAt: -1 }).lean();
};
