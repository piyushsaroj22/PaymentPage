export interface CreateOrderBody {
  amount: number;
}

export interface VerifyPaymentBody {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface RazorpayWebhookPaymentEntity {
  id: string;
  order_id: string;
  status: "captured" | "failed";
}

export interface RazorpayWebhookPayload {
  event: string;

  payload: {
    payment: {
      entity: RazorpayWebhookPaymentEntity;
    };
  };
}

export interface VerifyPaymentResponse {
  success: boolean;
  message: string;
  freeClicks: number;
  paidClicks: number;
}
