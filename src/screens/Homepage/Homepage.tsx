import { useQuery } from 'react-query'

import React, { useContext } from 'react'

import { Pagination } from 'antd'

import { JobList, JobsContainer, FeaturedJobsContainer } from './styles'
import PageTitle from '@/components/PageTitle'
import { fetchJobs } from '@/services/clients/JobClient'
import { IJobData } from '@/types'
import { PaginationContext, PaginationProvider } from '@/context/pagination'
import JobCard from '@/components/JobCard'
import OpeningSection from './components/OpeningSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JobFilter from './components/JobFilter'

interface IFetchJobs {
  count: number
  results: IJobData[]
  next?: string
  previous?: string
}

export const Homepage = () => {
  const { page, setPage, company, remote, orderBy, location } =
    useContext(PaginationContext)

  const { data: jobData, isLoading } = useQuery<IFetchJobs>(['jobs'], () =>
    fetchJobs({ page, company, remote, orderBy, location }),
  )

  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <OpeningSection />
        <PaginationProvider>
          <FeaturedJobsContainer>
            <JobFilter />

            <JobsContainer id="vagas">
              <PageTitle>Encontre sua vaga</PageTitle>
              <>
                <JobList>
                  {!isLoading &&
                    jobData?.results.map((job: IJobData) => (
                      <JobCard
                        key={job.id}
                        id={job.url}
                        logo={job?.company?.logo}
                        companyName={job?.company?.name}
                        url={job.url}
                        title={job.title}
                        location={job.location}
                        remote={job.remote}
                        date={job.date}
                      />
                    ))}
                </JobList>
                <Pagination
                  current={page}
                  total={!isLoading ? jobData?.count : 1}
                  pageSize={16}
                  showSizeChanger={false}
                  onChange={(page) => {
                    setPage(page)
                  }}
                  size="small"
                />
              </>
            </JobsContainer>
          </FeaturedJobsContainer>
        </PaginationProvider>
      </div>
      <Footer />
    </div>
  )
}
