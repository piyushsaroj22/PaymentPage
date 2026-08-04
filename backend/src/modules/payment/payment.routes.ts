import { Router } from "express";
import { createPaymentOrder } from "./payment.controller.js";

const router = Router();

router.post("/create-order", createPaymentOrder);

export default router;
