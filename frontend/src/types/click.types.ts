// export interface ClickState {
//   freeClicks: number;
//   paidClicks: number;
//   isLoading: boolean;
//   error: string | null;
// }

// export interface ClickResponse {
//   freeClicks: number;
//   paidClicks: number;
// }

export interface ClickData {
  freeClicks: number;
  paidClicks: number;
}

export interface ClickResponse {
  success: boolean;
  data: ClickData;
}

export interface UpdateClickResponse {
  success: boolean;
  data: ClickData;
}
