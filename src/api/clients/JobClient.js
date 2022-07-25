import { axiosInstance } from "../core/apiConfig";

async function fetchJobs(page = 1, company = "", remote = "") {
  console.log(remote);
  const { data } = await axiosInstance.get(
    `jobs/?page=${page}&company=${company}&remote=${remote}`
  );
  return data;
}

export default fetchJobs;
