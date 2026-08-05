import crypto from "crypto";
import type { Request, Response } from "express";
import env from "../../config/env.js";

import type {
  RazorpayWebhookPayload,
  VerifyPaymentBody,
} from "./payment.types.js";

import {
  createOrder,
  getPaymentHistory,
  handleWebhook,
  verifyPaymentService,
} from "./payment.service.js";

export const createPaymentOrder = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    const order = await createOrder(Number(amount));

    return res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong.",
    });
  }
};

export const verifyPayment = async (
  req: Request<{}, {}, VerifyPaymentBody>,
  res: Response,
) => {
  try {
    const result = await verifyPaymentService(req.body);

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong.",
    });
  }
};

export const paymentWebhook = async (req: Request, res: Response) => {
  try {
    const signature = req.headers["x-razorpay-signature"];

    if (typeof signature !== "string") {
      return res.status(400).json({
        success: false,
        message: "Missing webhook signature.",
      });
    }

    const expectedSignature = crypto
      .createHmac("sha256", env.RAZORPAY_WEBHOOK_SECRET)
      .update(req.body)
      .digest("hex");

    const received = Buffer.from(signature, "hex");
    const expected = Buffer.from(expectedSignature, "hex");

    if (
      received.length !== expected.length ||
      !crypto.timingSafeEqual(received, expected)
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid webhook signature.",
      });
    }

    const payload = JSON.parse(req.body.toString()) as RazorpayWebhookPayload;

    await handleWebhook(payload);

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong.",
    });
  }
};

export const getPayments = async (_req: Request, res: Response) => {
  try {
    const payments = await getPaymentHistory();

    return res.status(200).json({
      success: true,
      data: payments,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong.",
    });
  }
};
