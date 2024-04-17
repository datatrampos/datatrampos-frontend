import { axiosInstance } from '../api'

interface IFetchJobs {
  page?: number
  company?: string
  remote?: string
  orderBy?: string
  location?: string
}

export async function fetchJobs({
  page = 1,
  company = '',
  remote = '',
  orderBy = 'date',
  location = '',
}: IFetchJobs) {
  const { data } = await axiosInstance.get(
    `jobs/?page=${page}&company=${company}&remote=${remote}&orderBy=${orderBy}&location=${location}`,
  )
  return data
}

export async function fetchLocations() {
  const { data } = await axiosInstance.get(`locations`)
  return data
}
