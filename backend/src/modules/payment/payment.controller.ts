import { Request, Response } from "express";
import type { VerifyPaymentBody } from "./payment.types.js";
import {
  createOrder,
  verifyPaymentService,
  getPaymentHistory,
} from "./payment.service.js";

export const createPaymentOrder = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    const order = await createOrder(Number(amount));

    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({
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
    const data = await verifyPaymentService(req.body);

    res.status(200).json({
      success: true,
      message: "Payment verified successfully.",
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong.",
    });
  }
};

export const getPayments = async (_req: Request, res: Response) => {
  try {
    const payments = await getPaymentHistory();

    res.status(200).json({
      success: true,
      data: payments,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong.",
    });
  }
};
