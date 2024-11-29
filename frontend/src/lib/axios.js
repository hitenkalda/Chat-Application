import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-nx8i.onrender.com",
  withCredentials: true,
});
