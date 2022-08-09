import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://datatrampos-api.herokuapp.com",
  timeout: 25000,
});