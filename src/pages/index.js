import FooterInfo from "../components/Footer/FooterInfo";
import Navbar from "../components/Navbar/Navbar";
import Presentation from "../components/Presentation/Presentation";
import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";

import "antd/dist/antd.css";
import { Pagination, Select } from "antd";

import { PageTitle, Row } from "../components/Utils";
import { fetchJobs, fetchLocations } from "./api/clients/JobClient";
import fetchCompanies from "./api/clients/CompanyClient";
import { JobCard } from "../components/JobCard/JobCard";

import {
  JobList,
  JobsContainer,
  JobFilter,
  Label,
  OptionLogo,
  InputContainer,
  NoLogo,
  FeaturedJobsContainer,
  OptionLogoContainer,
  OptionContainer,
} from "../styles/home";

export default function Home(props) {
  const [page, setPageNumber] = useState(1);
  const [company, setCompany] = useState();
  const [remote, setRemote] = useState();
  const [orderBy, setOrder] = useState();
  const [location, setLocation] = useState();

  const { data: jobData, isLoading } = useQuery(
    ["jobs", page, company, remote, orderBy, location],
    () => fetchJobs(page, company, remote, orderBy, location),
    { initialData: page == 1 ? props.jobs : undefined }
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
    <div className="App">
      <div className="content">
        <Navbar />
        <Presentation />
        <FeaturedJobsContainer>
          <JobsContainer id="vagas">
            <PageTitle>Pesquisar vagas</PageTitle>
            <JobFilter>
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
                    <option key="" value="">
                      Qualquer
                    </option>
                    <option key="true" value="true">
                      Remoto
                    </option>
                    <option key="false" value="false">
                      Presencial/Híbrido
                    </option>
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
                    <option key="" value="">
                      Todas
                    </option>
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
                    <option key="" value="">
                      Todas
                    </option>
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
                <option key="date" value="date">
                  Mais novos
                </option>
                <option key="title" value="title">
                  Titulo em ordem alfabética
                </option>
                <option key="company" value="company">
                  Empresa em ordem alfabética
                </option>
              </Select>
            </InputContainer>
            {isLoading ? (
              <></>
            ) : (
              <>
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
                  current={page}
                  total={!isLoading ? jobData.count : 1}
                  pageSize={16}
                  showSizeChanger={false}
                  onChange={(page) => {
                    setPageNumber(page);
                  }}
                />
              </>
            )}
          </JobsContainer>
        </FeaturedJobsContainer>
      </div>
      <FooterInfo />
    </div>
  );
}

export async function getStaticProps() {
  const jobs = await fetchJobs("1", "", "", "date", "");

  return {
    props: {
      jobs,
    },
  };
}
