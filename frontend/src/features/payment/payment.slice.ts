import { createSlice } from "@reduxjs/toolkit";

import type {
  PaymentHistoryItem,
  RazorpayOrder,
} from "../../types/payment.types";

import {
  createPaymentOrder,
  fetchPaymentHistory,
  verifyPaymentThunk,
} from "./payment.thunks";

interface PaymentState {
  loading: boolean;
  error: string | null;
  order: RazorpayOrder | null;
  history: PaymentHistoryItem[];
}

const initialState: PaymentState = {
  loading: false,
  error: null,
  order: null,
  history: [],
};

const paymentSlice = createSlice({
  name: "payment",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ===========================
      // Create Order
      // ===========================

      .addCase(createPaymentOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createPaymentOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload.data;
      })

      .addCase(createPaymentOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to create payment order.";
      })

      // ===========================
      // Verify Payment
      // ===========================

      .addCase(verifyPaymentThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(verifyPaymentThunk.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(verifyPaymentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Payment verification failed.";
      })

      // ===========================
      // Payment History
      // ===========================

      .addCase(fetchPaymentHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPaymentHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload.data;
      })

      .addCase(fetchPaymentHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch payment history.";
      });
  },
});

export default paymentSlice.reducer;
