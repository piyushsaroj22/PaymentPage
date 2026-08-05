import type { RazorpayCheckoutOptions } from "../types/payment.types";

let razorpayLoader: Promise<void> | null = null;

export const loadRazorpayScript = (): Promise<void> => {
  if (window.Razorpay) {
    return Promise.resolve();
  }

  if (razorpayLoader) {
    return razorpayLoader;
  }

  razorpayLoader = new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    script.onload = () => resolve();

    script.onerror = () => reject(new Error("Failed to load Razorpay SDK."));

    document.body.appendChild(script);
  });

  return razorpayLoader;
};

export const openRazorpayCheckout = async (
  options: RazorpayCheckoutOptions,
) => {
  await loadRazorpayScript();

  if (!window.Razorpay) {
    throw new Error("Razorpay SDK is unavailable.");
  }

  const razorpay = new window.Razorpay(options);

  razorpay.open();
};
