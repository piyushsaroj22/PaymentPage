import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getClicks,
  incrementFreeClick,
  incrementPaidClick,
} from "../../api/click.api";

import type {
  ClickResponse,
  UpdateClickResponse,
} from "../../types/click.types";

export const fetchClicks = createAsyncThunk<
  ClickResponse,
  void,
  {
    rejectValue: string;
  }
>("click/fetch", async (_, { rejectWithValue }) => {
  try {
    return await getClicks();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to fetch click data.",
    );
  }
});

export const incrementFreeClickThunk = createAsyncThunk<
  UpdateClickResponse,
  void,
  {
    rejectValue: string;
  }
>("click/incrementFree", async (_, { rejectWithValue }) => {
  try {
    return await incrementFreeClick();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error
        ? error.message
        : "Failed to increment free click.",
    );
  }
});

export const incrementPaidClickThunk = createAsyncThunk<
  UpdateClickResponse,
  void,
  {
    rejectValue: string;
  }
>("click/incrementPaid", async (_, { rejectWithValue }) => {
  try {
    return await incrementPaidClick();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error
        ? error.message
        : "Failed to increment paid click.",
    );
  }
});
