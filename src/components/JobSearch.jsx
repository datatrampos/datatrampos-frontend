import styled from "styled-components";
import React from "react";
import { useQuery } from "react-query";

import { PageTitle } from "../components/Utils";
import JobClient from "../api/clients/JobClient";
import { JobCard } from "../components/JobCard/JobCard";

function JobSearch() {
  const { data, isLoading } = useQuery(["jobs"], JobClient);

  return (
    <Container id="vagas">
      <PageTitle>Vagas disponíveis</PageTitle>
      <JobList>
        {!isLoading &&
          data.map((job) => (
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
