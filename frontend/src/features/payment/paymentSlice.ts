import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  amount: "",
  isLoading: false,
};

const paymentSlice = createSlice({
  name: "payment",

  initialState,

  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },

    closeModal(state) {
      state.isModalOpen = false;
    },

    setAmount(state, action) {
      state.amount = action.payload;
    },

    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { openModal, closeModal, setAmount, setLoading } =
  paymentSlice.actions;

export default paymentSlice.reducer;
