export interface CreateOrderRequest {
  amount: number;
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}

export interface CreateOrderResponse {
  success: boolean;
  data: RazorpayOrder;
}

export interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
  message: string;
  freeClicks: number;
  paidClicks: number;
}

export interface PaymentHistoryItem {
  _id: string;
  amount: number;
  status: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentHistoryResponse {
  success: boolean;
  data: PaymentHistoryItem[];
}

// in 2 interfaces ko old paymentTypes.ts se paste kiya hu

export interface PaymentState {
  isModalOpen: boolean;
  amount: string;
  isLoading: boolean;
  error: string | null;
}

export interface CreateOrderResponse {
  id: string;
  amount: number;
  currency: string;
}
