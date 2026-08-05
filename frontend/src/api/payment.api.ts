import api from "./api";

import type {
  CreateOrderRequest,
  CreateOrderResponse,
  PaymentHistoryResponse,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
} from "../types/payment.types";

export const createOrder = async (
  data: CreateOrderRequest,
): Promise<CreateOrderResponse> => {
  const response = await api.post<CreateOrderResponse>(
    "/payment/create-order",
    data,
  );

  return response.data;
};

export const verifyPayment = async (
  data: VerifyPaymentRequest,
): Promise<VerifyPaymentResponse> => {
  const response = await api.post<VerifyPaymentResponse>(
    "/payment/verify",
    data,
  );

  return response.data;
};

export const getPaymentHistory = async (): Promise<PaymentHistoryResponse> => {
  const response = await api.get<PaymentHistoryResponse>("/payment/history");

  return response.data;
};
