import razorpay from "./razorpay.js";
import PaymentModel from "./payment.model.js";
import { PaymentStatus } from "./payment.constants.js";
import type { VerifyPaymentBody } from "./payment.types.js";

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

export const verifyPaymentService = async (_body: VerifyPaymentBody) => {
  return {
    message: "Verify payment service is under development.",
  };
};
