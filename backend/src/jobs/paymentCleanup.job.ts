import cron from "node-cron";

import { cleanupExpiredPayments } from "../modules/payment/payment.cleanup.js";

export const startPaymentCleanupJob = () => {
  cron.schedule("* * * * *", async () => {
    try {
      const result = await cleanupExpiredPayments();

      if (result.modifiedCount > 0) {
        console.log(
          `🧹 Payment Cleanup Job: ${result.modifiedCount} expired payment(s) marked as FAILED.`,
        );
      }
    } catch (error) {
      console.error("❌ Payment Cleanup Job Failed:", error);
    }
  });

  console.log("🕒 Payment Cleanup Job Started.");
};
