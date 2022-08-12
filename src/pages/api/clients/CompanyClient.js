import { axiosInstance } from "../../../services/apiConfig";

async function fetchCompanies() {
  const { data } = await axiosInstance.get(`companies/`);
  return data;
}

export default fetchCompanies;
