import { Request, Response } from "express";

import { createOrder } from "./payment.service.js";

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
