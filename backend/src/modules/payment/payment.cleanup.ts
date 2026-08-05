import PaymentModel from "./payment.model.js";
import { PaymentStatus } from "./payment.constants.js";

export const cleanupExpiredPayments = async () => {
  const result = await PaymentModel.updateMany(
    {
      status: PaymentStatus.PENDING,
      expiresAt: {
        $lt: new Date(),
      },
    },
    {
      $set: {
        status: PaymentStatus.FAILED,
      },
    },
  );

  if (result.modifiedCount > 0) {
    console.log(
      `✅ ${result.modifiedCount} expired payment(s) marked as FAILED.`,
    );
  }

  return result;
};
