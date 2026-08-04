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
      default: PaymentStatus.CREATED,
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
      default: "",
      unique: true,
      sparse: true,
      index: true,
    },

    razorpaySignature: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const PaymentModel = model("Payment", paymentSchema);

export default PaymentModel;
