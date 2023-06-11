import axios from "axios";
import { BASE_URL, TOKEN_KEY } from "../constants";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: { crossDomain: true, "Content-Type": "application/json" },
});

axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {};
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
  if (accessToken) {
    customHeaders.Authorization = `Bearer ${accessToken}`;
  }

  return {
    ...config,
    headers: {
      Authorization: accessToken, // auto attach token
      // ...config.headers, // but you can override for some requests
    },
  };
});
export default axiosClient;
