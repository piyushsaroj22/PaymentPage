import api from "./api";

export const getClicks = async () => {
  const response = await api.get("/clicks");
  return response.data.data;
};

export const freeClick = async () => {
  const response = await api.post("/clicks/free");
  return response.data.data;
};
