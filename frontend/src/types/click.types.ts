export interface ClickState {
  freeClicks: number;
  paidClicks: number;
  isLoading: boolean;
  error: string | null;
}

export interface ClickResponse {
  freeClicks: number;
  paidClicks: number;
}
