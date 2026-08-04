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

  await PaymentModel.create({
    amount,
    status: PaymentStatus.CREATED,
    razorpayOrderId: order.id,
  });

  return order;
};

//=============================== Helper hai ye

const markPaymentAsSuccess = async (
  razorpayOrderId: string,
  razorpayPaymentId: string,
  razorpaySignature: string,
  session: Awaited<ReturnType<typeof PaymentModel.startSession>>,
): Promise<VerifyPaymentResponse> => {
  const payment = await PaymentModel.findOneAndUpdate(
    {
      razorpayOrderId,
      status: PaymentStatus.CREATED,
    },
    {
      $set: {
        status: PaymentStatus.SUCCESS,
        razorpayPaymentId,
        razorpaySignature,
      },
    },
    {
      new: true,
      session,
    },
  );

  // Already processed
  if (!payment) {
    const existing = await PaymentModel.findOne({
      razorpayOrderId,
    }).session(session);

    if (!existing) {
      throw new Error("Payment order not found.");
    }

    if (existing.status === PaymentStatus.SUCCESS) {
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

    throw new Error("Payment has already failed.");
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
      status: PaymentStatus.CREATED,
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

  const generatedSignature = crypto
    .createHmac("sha256", env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generatedSignature !== razorpay_signature) {
    throw new Error("Invalid payment signature.");
  }

  const session = await PaymentModel.startSession();

  try {
    session.startTransaction();

    const result = await markPaymentAsSuccess(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      session,
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
        await markPaymentAsSuccess(payment.order_id, payment.id, "", session);
        break;
      }
      case RAZORPAY_FAILED_EVENT: {
        await markPaymentAsFailed(payment.order_id, session);
        break;
      }
      default:
        break;
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
