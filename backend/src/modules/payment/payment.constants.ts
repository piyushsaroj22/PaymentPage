export enum PaymentStatus {
  CREATED = "CREATED",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export const MIN_PAYMENT_AMOUNT = 1;

export const MAX_PAYMENT_AMOUNT = 5000;

export const PAYMENT_CURRENCY = "INR";

export const RAZORPAY_CAPTURE_EVENT = "payment.captured";

export const RAZORPAY_FAILED_EVENT = "payment.failed";
