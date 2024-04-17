import { axiosInstance } from '../api'

async function fetchCompanies() {
  const { data } = await axiosInstance.get(`companies/`)
  return data
}

export default fetchCompanies
