import JobCard from '@/components/JobCard'
import { PaginationContext } from '@/context/pagination'
import { fetchJobs } from '@/services/clients/JobClient'
import { IJobData } from '@/types'
import { useContext } from 'react'
import { useQuery } from 'react-query'

import LoadingCardList from '../LoadingCardList'

interface IFetchJobs {
  count: number
  results: IJobData[]
  next?: string
  previous?: string
}

export const useList = () => {
  const { page, setPage, company, remote, orderBy, location, setOrderBy } =
    useContext(PaginationContext)

  const { data: jobData, isLoading } = useQuery<IFetchJobs>(
    ['jobs', page, company, remote, orderBy, location],
    () => fetchJobs({ page, company, remote, orderBy, location }),
  )

  const getJobs = () => {
    if (!isLoading && jobData) {
      if (jobData?.results?.length > 0) {
        return jobData?.results.map((job: IJobData) => (
          <JobCard
            key={job.url}
            id={job.url}
            logo={job?.company?.logo}
            companyName={job?.company?.name}
            url={job.url}
            title={job.title}
            location={job.location}
            remote={job.remote}
            date={job.date}
          />
        ))
      } else {
        return <div> Nenhuma vaga encontrada com esses filtros</div>
      }
    } else {
      return <LoadingCardList />
    }
  }

  return {
    page,
    setPage,
    setOrderBy,
    jobData,
    isLoading,
    getJobs,
  }
}
