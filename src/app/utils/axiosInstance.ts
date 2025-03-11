import axios from "axios";
import { baseUrl } from "../constants/constant";

let accessToken =
  typeof window !== "undefined" &&
  window.localStorage &&
  localStorage.getItem("accessToken");

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  },
});
export default axiosInstance;
