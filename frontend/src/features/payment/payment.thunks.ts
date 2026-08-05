import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createOrder,
  getPaymentHistory,
  verifyPayment,
} from "../../api/payment.api";

import type {
  CreateOrderRequest,
  CreateOrderResponse,
  PaymentHistoryResponse,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
} from "../../types/payment.types";

export const createPaymentOrder = createAsyncThunk<
  CreateOrderResponse,
  CreateOrderRequest,
  {
    rejectValue: string;
  }
>("payment/createOrder", async (data, { rejectWithValue }) => {
  try {
    return await createOrder(data);
  } catch (error) {
    return rejectWithValue(
      error instanceof Error
        ? error.message
        : "Failed to create payment order.",
    );
  }
});

export const verifyPaymentThunk = createAsyncThunk<
  VerifyPaymentResponse,
  VerifyPaymentRequest,
  {
    rejectValue: string;
  }
>("payment/verify", async (data, { rejectWithValue }) => {
  try {
    return await verifyPayment(data);
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Payment verification failed.",
    );
  }
});

export const fetchPaymentHistory = createAsyncThunk<
  PaymentHistoryResponse,
  void,
  {
    rejectValue: string;
  }
>("payment/history", async (_, { rejectWithValue }) => {
  try {
    return await getPaymentHistory();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error
        ? error.message
        : "Failed to fetch payment history.",
    );
  }
});
