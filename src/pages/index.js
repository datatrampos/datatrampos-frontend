import FooterInfo from "../components/Footer/FooterInfo";
import Navbar from "../components/Navbar/Navbar";
import Presentation from "../components/Presentation/Presentation";
import { useQuery } from "@tanstack/react-query";

import Image from "next/image";
import React, { useState } from "react";

import "antd/dist/antd.css";
import { Pagination, Select, Radio } from "antd";

import { LoadingSpinnerContainer, PageTitle, Row } from "../components/Utils";
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
  const [company, setCompany] = useState("");
  const [remote, setRemote] = useState("");
  const [orderBy, setOrder] = useState("date");
  const [location, setLocation] = useState("");

  const { data: jobData, isLoading } = useQuery(
    ["jobs", page, company, remote, orderBy, location],
    () => fetchJobs(page, company, remote, orderBy, location),
    {
      initialData:
        page == 1 &&
        company == "" &&
        remote == "" &&
        orderBy == "date" &&
        location == ""
          ? props.jobs
          : undefined,
    }
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
            <PageTitle>Encontre sua vaga</PageTitle>
            <JobFilter>
              <Row center="true" wrap="true" justifyCenter="true">
                <InputContainer>
                  <Label>Ambiente de trabalho:</Label>
                  <Radio.Group
                    onChange={(e) => {
                      setRemote(e.target.value);
                      setPageNumber(1);
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
                    onChange={(value, option) => {
                      setCompany(option.key);
                      setPageNumber(1);
                    }}
                    defaultValue=""
                    showSearch={true}
                  >
                    <Select.Option key="" value="">
                      Todas
                    </Select.Option>
                    {!loadingCompanies &&
                      companiesOptions.map((company) => (
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
                      setLocation(value);
                      setPageNumber(1);
                    }}
                    defaultValue=""
                    showSearch={true}
                  >
                    <Select.Option key="" value="">
                      Todas
                    </Select.Option>
                    {!loadingLocations &&
                      locations["locations"].map((city, index) => (
                        <Select.Option key={index} value={city}>
                          {city}
                        </Select.Option>
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
            {isLoading ? (
              <LoadingSpinnerContainer>
                <Image
                  src="/assets/logo-spinner.gif"
                  alt="illustration"
                  layout="fill"
                  objectFit="cover"
                />
                <span>Buscando...</span>
              </LoadingSpinnerContainer>
            ) : (
              <>
                <JobList>
                  {!isLoading &&
                    jobData.results.map((job) => (
                      <JobCard
                        key={job.url}
                        logo={job?.company?.logo}
                        companyName={job.company.name}
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
