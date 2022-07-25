import React, { useState } from "react";
import { useQuery } from "react-query";

import "antd/dist/antd.css";
import { Pagination, Select, Checkbox } from "antd";

import { PageTitle } from "../Utils";
import fetchJobs from "../../api/clients/JobClient";
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

  const { data: jobData, isLoading } = useQuery(
    ["jobs", pageNumber, company, remote],
    () => fetchJobs(pageNumber, company, remote)
  );

  const { data: companiesOptions, isLoading: loadingCompanies } = useQuery(
    ["companies"],
    fetchCompanies
  );

  return (
    <Container id="vagas">
      <JobFilter>
        <InputContainer>
          <Label>Ambiente de trabalho:</Label>
          <Select
            style={{ width: 200 }}
            onChange={(value) => {
              setRemote(value);
            }}
          >
            <option value="" defaultChecked>
              Qualquer
            </option>
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
            }}
          >
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
      </JobFilter>
      <PageTitle>Vagas disponíveis</PageTitle>
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
        pageSize={10}
        showSizeChanger={false}
        onChange={(page) => {
          setPageNumber(page);
        }}
      />
    </Container>
  );
}

export default JobSearch;
