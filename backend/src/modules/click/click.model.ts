import { Schema, model } from "mongoose";

const clickSchema = new Schema(
  {
    freeClicks: {
      type: Number,
      default: 0,
      required: true,
    },

    paidClicks: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ClickModel = model("Click", clickSchema);

export default ClickModel;
