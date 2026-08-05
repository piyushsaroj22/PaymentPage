import { createSlice } from "@reduxjs/toolkit";

import {
  fetchClicks,
  incrementFreeClickThunk,
  incrementPaidClickThunk,
} from "./click.thunks";

interface ClickState {
  loading: boolean;
  error: string | null;
  freeClicks: number;
  paidClicks: number;
}

const initialState: ClickState = {
  loading: false,
  error: null,
  freeClicks: 0,
  paidClicks: 0,
};

const clickSlice = createSlice({
  name: "click",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch

      .addCase(fetchClicks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchClicks.fulfilled, (state, action) => {
        state.loading = false;
        state.freeClicks = action.payload.data.freeClicks;
        state.paidClicks = action.payload.data.paidClicks;
      })

      .addCase(fetchClicks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch click data.";
      })

      // Free

      .addCase(incrementFreeClickThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(incrementFreeClickThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.freeClicks = action.payload.data.freeClicks;
        state.paidClicks = action.payload.data.paidClicks;
      })

      .addCase(incrementFreeClickThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to increment free click.";
      })

      // Paid

      .addCase(incrementPaidClickThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(incrementPaidClickThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.freeClicks = action.payload.data.freeClicks;
        state.paidClicks = action.payload.data.paidClicks;
      })

      .addCase(incrementPaidClickThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to increment paid click.";
      });
  },
});

export default clickSlice.reducer;
