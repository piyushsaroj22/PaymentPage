import { Schema, model } from "mongoose";
import { PaymentStatus } from "./payment.constants.js";

const paymentSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    status: {
      type: String,
      enum: Object.values(PaymentStatus),
      default: PaymentStatus.PENDING,
      required: true,
      index: true,
    },

    razorpayOrderId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    razorpayPaymentId: {
      type: String,
      unique: true,
      sparse: true,
    },

    razorpaySignature: {
      type: String,
    },

    expiresAt: {
      type: Date,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const PaymentModel = model("Payment", paymentSchema);

export default PaymentModel;
