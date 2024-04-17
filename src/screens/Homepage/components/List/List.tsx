import { JobList, JobsContainer, InputContainer } from './styles'
import { Pagination, Select } from 'antd'
import { useContext } from 'react'
import { PaginationContext } from '@/context/pagination'
import { useQuery } from 'react-query'
import { IJobData } from '@/types'
import { fetchJobs } from '@/services/clients/JobClient'
import JobCard from '@/components/JobCard'
import Label from '@/components/Label'
import LoadingCardList from '../LoadingCardList'

interface IFetchJobs {
  count: number
  results: IJobData[]
  next?: string
  previous?: string
}

export const List = () => {
  const { page, setPage, company, remote, orderBy, location, setOrderBy } =
    useContext(PaginationContext)

  const { data: jobData, isLoading } = useQuery<IFetchJobs>(
    ['jobs', page, company, remote, orderBy, location],
    () => fetchJobs({ page, company, remote, orderBy, location }),
  )

  return (
    <JobsContainer id="vagas">
      <InputContainer>
        <Label issecondary="true">Ordenar por:</Label>
        <Select
          style={{ width: 150 }}
          onChange={(value) => {
            setOrderBy(value)
            setPage(1)
          }}
          defaultValue="date"
        >
          <Select.Option key="date" value="date">
            Mais novos
          </Select.Option>
          <Select.Option key="title" value="title">
            Titulo em ordem alfabética
          </Select.Option>
          <Select.Option key="company" value="company">
            Empresa em ordem alfabética
          </Select.Option>
        </Select>
      </InputContainer>
      <JobList>
        {!isLoading ? (
          jobData?.results.map((job: IJobData) => (
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
        ) : (
          <LoadingCardList />
        )}
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
    </JobsContainer>
  )
}
