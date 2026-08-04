import razorpay from "./razorpay.js";

export const createOrder = async (amount: number) => {
  if (Number.isNaN(amount)) {
    throw new Error("Amount must be a valid number.");
  }

  if (amount < 1 || amount > 5000) {
    throw new Error("Amount must be between ₹1 and ₹5000.");
  }

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
  });

  return order;
};
