import type { RazorpayCheckoutOptions } from "./payment.types";

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayCheckoutOptions) => {
      open(): void;
    };
  }
}

export {};
