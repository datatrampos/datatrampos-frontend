import { axiosInstance } from "../core/apiConfig";

async function fetchJobs(page) {
  const { data } = await axiosInstance.get(`jobs/?page=${page}`);
  return data;
}

export default fetchJobs;
