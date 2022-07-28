import React, { useState } from "react";
import { useQuery } from "react-query";

import "antd/dist/antd.css";
import { Pagination, Select,} from "antd";

import { PageTitle, Row } from "../Utils";
import { fetchJobs, fetchLocations } from "../../api/clients/JobClient";
import fetchCompanies from "../../api/clients/CompanyClient";
import { JobCard } from "../JobCard/JobCard";

import {
  JobList,
  Container,
  JobFilter,
  Label,
  OptionLogo,
  InputContainer,
} from "./styles";

function JobSearch() {
  const [pageNumber, setPageNumber] = useState(1);
  const [company, setCompany] = useState("");
  const [remote, setRemote] = useState("");
  const [orderBy, setOrder] = useState("date");
  const [location, setLocation] = useState("");

  const { data: jobData, isLoading } = useQuery(
    ["jobs", pageNumber, company, remote, orderBy, location],
    () => fetchJobs(pageNumber, company, remote, orderBy, location)
  );

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
                setPageNumber(1)
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
                setPageNumber(1)
              }}
              defaultValue=""
            >
              <option value="">Todas</option>
              {!loadingCompanies &&
                companiesOptions.map((company) => (
                  <option value={company.id}>
                    <OptionLogo
                      src={`data:image/jpeg;base64,${company.logo}`}
                      alt={`${company.name}-logo`}
                    />
                    {company.name}
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
                setPageNumber(1)
              }}
              defaultValue=""
            >
              <option value="">Todas</option>
              {!loadingLocations &&
                locations["locations"].map((city, index) => (
                  <option value={city}>{city}</option>
                ))}
            </Select>
          </InputContainer>
        </Row>
      </JobFilter>
      <Container id="vagas">
        <JobList>
          <InputContainer style={{ flexDirection: "row" }}>
            <Label red>Ordenar por:</Label>
            <Select
              style={{ width: 150, marginBottom: "20px" }}
              onChange={(value) => {
                setOrder(value);
                setPageNumber(1)
              }}
              defaultValue="date"
              bordered={false}
            >
              <option value="date">Mais novos</option>
              <option value="title">Titulo em ordem alfabética</option>
              <option value="company">Empresa em ordem alfabética</option>
            </Select>
          </InputContainer>
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
          pageSize={10}
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
