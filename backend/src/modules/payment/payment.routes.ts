import { Router } from "express";
import { createPaymentOrder, verifyPayment } from "./payment.controller.js";

const router = Router();

router.post("/create-order", createPaymentOrder);
router.post("/verify", verifyPayment);

export default router;
