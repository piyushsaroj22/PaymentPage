import { Schema, model } from "mongoose";

const paymentSchema = new Schema(
  {
    amount: {
      type: Number,
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

    status: {
      type: String,
      enum: ["SUCCESS"],
      default: "SUCCESS",
    },
  },
  {
    timestamps: true,
  },
);

const PaymentModel = model("Payment", paymentSchema);

export default PaymentModel;
