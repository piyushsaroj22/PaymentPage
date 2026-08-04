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
