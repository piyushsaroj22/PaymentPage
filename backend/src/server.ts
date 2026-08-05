import app from "./app.js";
import env from "./config/env.js";
import { connectDatabase } from "./config/database.js";
import { startPaymentCleanupJob } from "./jobs/paymentCleanup.job.js";

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${env.PORT}`);

      startPaymentCleanupJob();
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
