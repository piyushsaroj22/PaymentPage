import paymentRoutes from "./modules/payment/payment.routes.js";
import clickRoutes from "./modules/click/click.routes.js";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import env from "./config/env.js";

const app = express();
const CLIENT_URL = env.CLIENT_URL;

app.use(helmet());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/clicks", clickRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀",
  });
});

export default app;
