import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  freeClicks: 0,
  paidClicks: 0,
};

const clickSlice = createSlice({
  name: "click",

  initialState,

  reducers: {
    setClicks(state, action) {
      state.freeClicks = action.payload.freeClicks;
      state.paidClicks = action.payload.paidClicks;
    },
  },
});

export const { setClicks } = clickSlice.actions;

export default clickSlice.reducer;
