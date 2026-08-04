import { Router } from "express";

import {
  createPaymentOrder,
  getPayments,
  paymentWebhook,
  verifyPayment,
} from "./payment.controller.js";

const router = Router();

router.post("/create-order", createPaymentOrder);

router.post("/verify", verifyPayment);

router.post("/webhook", paymentWebhook);

router.get("/history", getPayments);

export default router;
