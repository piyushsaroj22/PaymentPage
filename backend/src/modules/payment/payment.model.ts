import { Schema, model } from "mongoose";

import { PaymentStatus } from "./payment.constants.js";

const paymentSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(PaymentStatus),
      default: PaymentStatus.CREATED,
      required: true,
    },

    razorpayOrderId: {
      type: String,
      required: true,
      unique: true,
    },

    razorpayPaymentId: {
      type: String,
      default: "",
    },

    razorpaySignature: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const PaymentModel = model("Payment", paymentSchema);

export default PaymentModel;
