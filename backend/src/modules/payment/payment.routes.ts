import { Router } from "express";

import {
  cleanupPayments,
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
router.post("/cleanup", cleanupPayments);

export default router;
