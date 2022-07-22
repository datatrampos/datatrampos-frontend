import styled from "styled-components";
import { Combobox } from "@headlessui/react";
import React from "react";
import { useEffect, useState } from "react";
import { CompanyClient } from "../api/clients/CompanyClient";
import { COLORS } from "../styles/colors";

const JobFilter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState([]);

  const [selectedCompany, setSelectedCompany] = useState("");
  const [query, setQuery] = useState("");

  const filteredCompanies =
    query === ""
      ? companies
      : companies.filter((company) => {
          return company.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    load();
    console.log(companies);
  }, []);

  return (
    <JobFilterContainer>
      <FilterTitle>Filtrar por:</FilterTitle>
      <Combobox value={selectedCompany} onChange={setSelectedCompany}>
        <Combobox.Input
          className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options>
          {filteredCompanies.map((company) => (
            <Combobox.Option key={company} value={company}>
              {company}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </JobFilterContainer>
  );

  async function load() {
    setIsLoading(true);
    const data = await CompanyClient().getCompanies();
    console.log(data);

    setCompanies(
      data.map((company) => {
        console.log(company.name);
        return company.name;
      })
    );

    setIsLoading(false);
  }
};

const FilterTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin: 10px 0px;
  color: ${COLORS.darkRed};
`;

const JobFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  border-radius: 10px;
  height: fit-content;
`;

export default JobFilter;
