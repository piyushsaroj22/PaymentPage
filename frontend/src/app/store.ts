import { configureStore } from "@reduxjs/toolkit";

import clickReducer from "../features/click/clickSlice";
import paymentReducer from "../features/payment/paymentSlice";

export const store = configureStore({
  reducer: {
    click: clickReducer,
    payment: paymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
