import axios from "axios";
import { getBearerToken } from "../utils/getBearerToken";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getBearerToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
