import { configureStore } from "@reduxjs/toolkit";

import clickReducer from "../features/click/click.slice";
import paymentReducer from "../features/payment/payment.slice";

export const store = configureStore({
  reducer: {
    click: clickReducer,
    payment: paymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
