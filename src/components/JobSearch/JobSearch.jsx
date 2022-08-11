import React, { useState } from "react";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";

import "antd/dist/antd.css";
import { Pagination, Select } from "antd";

import { PageTitle, Row } from "../Utils";
import { fetchJobs, fetchLocations } from "../../pages/api/clients/JobClient";
import fetchCompanies from "../../pages/api/clients/CompanyClient";
import { JobCard } from "../JobCard/JobCard";

import {
  JobList,
  Container,
  JobFilter,
  Label,
  OptionLogo,
  InputContainer,
  NoLogo,
} from "./styles";

function JobSearch() {
  const [pageNumber, setPageNumber] = useState();
  const [company, setCompany] = useState();
  const [remote, setRemote] = useState();
  const [orderBy, setOrder] = useState();
  const [location, setLocation] = useState();

  const { data: jobData, isLoading } = useQuery(
    ["jobs"],
    fetchJobs
  );

  console.log(isLoading)

  const { data: companiesOptions, isLoading: loadingCompanies } = useQuery(
    ["companies"],
    fetchCompanies
  );

  const { data: locations, isLoading: loadingLocations } = useQuery(
    ["locations"],
    fetchLocations
  );

  return (
    <>
      <JobFilter>
        <PageTitle>Pesquisar vagas</PageTitle>
        <Row center wrap justifyCenter>
          <InputContainer>
            <Label>Ambiente de trabalho:</Label>
            <Select
              style={{ width: 200 }}
              onChange={(value) => {
                setRemote(value);
                setPageNumber(1);
              }}
              defaultValue=""
            >
              <option value="">Qualquer</option>
              <option value="true">Remoto</option>
              <option value="false">Presencial</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <Label>Empresas:</Label>
            <Select
              style={{ width: 200 }}
              onChange={(value) => {
                setCompany(value);
                setPageNumber(1);
              }}
              defaultValue=""
            >
              <option key="" value="">Todas</option>
              {!loadingCompanies &&
                companiesOptions
                  .sort((a, b) => {
                    let companyA = a.name.toLowerCase(),
                      companyB = b.name.toLowerCase();
                    if (companyA < companyB) {
                      return -1;
                    }
                    if (companyA > companyB) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.logo ? (
                        <OptionLogo
                          src={`data:image/jpeg;base64,${company.logo}`}
                          alt={`${company.name}-logo`}
                          width={30}
                          height={30}
                        />
                      ) : (
                        <NoLogo>
                          {company.name.slice(0, 2).toUpperCase()}
                        </NoLogo>
                      )}
                      <span>{company.name}</span>
                    </option>
                  ))}
            </Select>
          </InputContainer>
          <InputContainer>
            <Label>Local:</Label>
            <Select
              style={{ width: 200 }}
              onChange={(value) => {
                setLocation(value);
                setPageNumber(1);
              }}
              defaultValue=""
            >
              <option key="" value="">Todas</option>
              {!loadingLocations &&
                locations["locations"].map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
            </Select>
          </InputContainer>
        </Row>
      </JobFilter>
      <Container id="vagas">
        <InputContainer style={{ flexDirection: "row" }}>
          <Label red>Ordenar por:</Label>
          <Select
            style={{ width: 150, marginBottom: "20px" }}
            onChange={(value) => {
              setOrder(value);
              setPageNumber(1);
            }}
            defaultValue="date"
            bordered={false}
          >
            <option key="date" value="date">Mais novos</option>
            <option key="title" value="title">Titulo em ordem alfabética</option>
            <option key="company" value="company">Empresa em ordem alfabética</option>
          </Select>
        </InputContainer>
        <JobList>
          {!isLoading &&
            jobData.results.map((job) => (
              <JobCard
                key={job.id}
                logo={job?.company?.logo}
                companyName={job.company.name}
                url={job.url}
                title={job.title}
                location={job.location}
                remote={job.remote}
              />
            ))}
        </JobList>
        <Pagination
          defaultCurrent={1}
          total={!isLoading ? jobData.count : 1}
          pageSize={16}
          showSizeChanger={false}
          onChange={(page) => {
            setPageNumber(page);
          }}
        />
      </Container>
    </>
  );
}
export default JobSearch;
