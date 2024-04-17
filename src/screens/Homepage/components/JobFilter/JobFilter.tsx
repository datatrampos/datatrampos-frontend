import React, { useContext } from 'react'
import { useQuery } from 'react-query'

import { Select, Radio } from 'antd'

import {
  Container,
  Label,
  OptionLogo,
  InputContainer,
  NoLogo,
  OptionContainer,
  OptionLogoContainer,
} from './styles'
import { fetchLocations } from '@/services/clients/JobClient'
import fetchCompanies from '@/services/clients/CompanyClient'
import { ICompanyData } from '@/types'
import Row from '@/components/Row'
import { DefaultOptionType } from 'antd/es/select'
import { PaginationContext } from '@/context/pagination'

export const JobFilter = () => {
  const { setPage, setRemote, setCompany, setLocation, setOrderBy } =
    useContext(PaginationContext)

  const { data: companiesOptions, isLoading: loadingCompanies } = useQuery<
    ICompanyData[]
  >(['getCompanies'], fetchCompanies)

  const { data: locations, isLoading: loadingLocations } = useQuery<{
    locations: string[]
  }>(['getLocations'], fetchLocations)

  return (
    <>
      <Container>
        <Row center="true" wrap="true" justifyCenter="true">
          <InputContainer>
            <Label>Ambiente de trabalho:</Label>
            <Radio.Group
              onChange={(e) => {
                setRemote(e.target.value)
                setPage(1)
              }}
              defaultValue=""
            >
              <Radio.Button key="" value="">
                Qualquer
              </Radio.Button>
              <Radio.Button key="true" value="true">
                Remoto
              </Radio.Button>
              <Radio.Button key="false" value="false">
                Presencial/Híbrido
              </Radio.Button>
            </Radio.Group>
          </InputContainer>
          <InputContainer>
            <Label>Empresas:</Label>
            <Select
              style={{ width: 200 }}
              onChange={(value, option: DefaultOptionType) => {
                setCompany(option?.key)
                setPage(1)
              }}
              defaultValue=""
              showSearch={true}
            >
              <Select.Option key="" value="">
                Todas
              </Select.Option>
              {!loadingCompanies &&
                companiesOptions?.map((company) => (
                  <Select.Option key={company.id} value={company.name}>
                    <OptionContainer>
                      <span>{company.name}</span>
                      {company.logo ? (
                        <OptionLogoContainer>
                          <OptionLogo
                            src={`data:image/jpeg;base64,${company.logo}`}
                            alt={`${company.name}-logo`}
                            layout="fill"
                            objectFit="contain"
                          />
                        </OptionLogoContainer>
                      ) : (
                        <NoLogo>
                          {company.name.slice(0, 2).toUpperCase()}
                        </NoLogo>
                      )}
                    </OptionContainer>
                  </Select.Option>
                ))}
            </Select>
          </InputContainer>
          <InputContainer>
            <Label>Local:</Label>
            <Select
              style={{ width: 200 }}
              onChange={(value) => {
                setLocation(value)
                setPage(1)
              }}
              defaultValue=""
              showSearch={true}
            >
              <Select.Option key="" value="">
                Todas
              </Select.Option>
              {!loadingLocations &&
                locations?.locations.map((city, index) => (
                  <Select.Option key={index} value={city}>
                    {city}
                  </Select.Option>
                ))}
            </Select>
          </InputContainer>
        </Row>
      </Container>
      <InputContainer style={{ flexDirection: 'row' }}>
        <Label isSecondary>Ordenar por:</Label>
        <Select
          style={{ width: 150, marginBottom: '20px' }}
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
    </>
  )
}
