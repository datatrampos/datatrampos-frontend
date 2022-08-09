import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://datatrampos-api.herokuapp.com",
  timeout: 25000,
});