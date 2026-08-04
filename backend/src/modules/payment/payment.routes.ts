import { Router } from "express";
import {
  createPaymentOrder,
  verifyPayment,
  getPayments,
} from "./payment.controller.js";

const router = Router();

router.post("/create-order", createPaymentOrder);
router.post("/verify", verifyPayment);
router.get("/history", getPayments);

export default router;
