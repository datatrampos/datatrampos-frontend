import { axiosInstance } from "../core/apiConfig";

export async function fetchJobs(page, company='', remote='', orderBy="date", location='') {
  const { data } = await axiosInstance.get(
    `jobs/?page=${page}&company=${company}&remote=${remote}&orderBy=${orderBy}&location=${location}`
  );
  return data;
}

export async function fetchLocations() {
  const { data } = await axiosInstance.get(`locations`);
  return data;
}
