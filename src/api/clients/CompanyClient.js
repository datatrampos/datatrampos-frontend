import { axiosInstance } from "../core/apiConfig";

export const CompanyClient = () => {
  async function getCompanies() {
    try {
      const res = await axiosInstance.get("companies/");
      const data = res.data;
      return data;
    } catch (error) {
      return console.log(error);
    }
  }

  return {
    getCompanies,
  };
};
