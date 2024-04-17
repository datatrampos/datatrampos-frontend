import React, { useContext } from 'react'
import { useQuery } from 'react-query'

import { Select, Radio } from 'antd'

import {
  Container,
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
import Label from '@/components/Label'

export const Filter = () => {
  const { setPage, setRemote, setCompany, setLocation } =
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
        <Row center="true" wrap="true" justifycenter="true">
          <InputContainer>
            <Label issecondary="true">Ambiente de trabalho:</Label>
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
            <Label issecondary="true">Empresas:</Label>
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
                            fill
                            style={{ objectFit: 'contain' }}
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
            <Label issecondary="true">Local:</Label>
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
    </>
  )
}
