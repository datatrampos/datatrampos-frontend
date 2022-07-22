import { axiosInstance } from "../core/apiConfig";

async function JobClient() {
  const { data } = await axiosInstance.get("jobs/");
  return data;
}

export default JobClient;
