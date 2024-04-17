import Label from '@/components/Label'
import { Pagination, Select } from 'antd'

import { JobList, JobsContainer, InputContainer } from './styles'
import { useList } from './useList'

export const List = () => {
  const { page, setPage, setOrderBy, jobData, isLoading, getJobs } = useList()

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
      <JobList>{getJobs()}</JobList>
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
