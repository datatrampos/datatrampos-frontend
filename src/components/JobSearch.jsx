import styled from "styled-components";
import React, { useState } from "react";
import { useQuery } from "react-query";

import "antd/dist/antd.css";
import { Pagination } from "antd";

import { PageTitle } from "../components/Utils";
import fetchJobs from "../api/clients/JobClient";
import { JobCard } from "../components/JobCard/JobCard";

function JobSearch() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading } = useQuery(["jobs", pageNumber], () => fetchJobs(pageNumber));

  return (
    <Container id="vagas">
      <PageTitle>Vagas disponíveis</PageTitle>
      <JobList>
        {!isLoading &&
          data.results.map((job) => (
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
        {!isLoading && (
          <Pagination
            defaultCurrent={1}
            total={data.count}
            defaultPageSize={10}
            pageSize={10}
            showSizeChanger={false}
            onChange={(page) => {
              setPageNumber(page);
            }}
          />
        )}
      </JobList>
    </Container>
  );
}

const JobList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  padding-right: 90px;
  padding-left: 90px;
`;

export default JobSearch;
