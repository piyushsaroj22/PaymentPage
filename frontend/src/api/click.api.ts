import api from "./api";

import type { ClickResponse, UpdateClickResponse } from "../types/click.types";

export const getClicks = async (): Promise<ClickResponse> => {
  const response = await api.get<ClickResponse>("/clicks");

  return response.data;
};

export const incrementFreeClick = async (): Promise<UpdateClickResponse> => {
  const response = await api.post<UpdateClickResponse>("/clicks/free");

  return response.data;
};

export const incrementPaidClick = async (): Promise<UpdateClickResponse> => {
  const response = await api.patch<UpdateClickResponse>("/clicks/paid");

  return response.data;
};
