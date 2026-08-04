import dotenv from "dotenv";
dotenv.config();

if (
  !process.env.PORT ||
  !process.env.MONGO_URI ||
  !process.env.RAZORPAY_KEY_ID ||
  !process.env.RAZORPAY_KEY_SECRET ||
  !process.env.RAZORPAY_WEBHOOK_SECRET ||
  !process.env.CLIENT_URL
) {
  throw new Error(
    "❌ Missing required environment variables. Please check your .env file.",
  );
}

const env = {
  PORT: Number(process.env.PORT),
  MONGO_URI: process.env.MONGO_URI,
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
};

export default env;
