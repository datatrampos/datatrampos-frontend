import React from "react";
import {
  Container,
  JobCardInfo,
  CompanyName,
  CompanyLogo,
  JobTitle,
  CardItemsContainer,
  CardItem,
  CardButton,
  CardInfoContainer,
  CompanyWithoutLogo,
  LogoContainer,
} from "./styles";
import {LocationCity, Home} from "@mui/icons-material";

export const JobCard = (props) => {
  return (
    <Container>
      <CardInfoContainer>
        <LogoContainer>
          {props.logo ? (
            <CompanyLogo
              src={`data:image/jpeg;base64,${props.logo}`}
              alt={`${props.companyName}-logo`}
              width={60}
              height={60}
            />
          ) : (
            <CompanyWithoutLogo>
              {props.companyName.slice(0, 2).toUpperCase()}
            </CompanyWithoutLogo>
          )}
        </LogoContainer>

        <JobCardInfo>
          <CompanyName>{props.companyName}</CompanyName>
          <JobTitle href={props.url} target="_blank" rel="noreferrer">
            {props.title}
          </JobTitle>
          <CardItemsContainer>
            {props.location && (
              <CardItem>
                <LocationCity style={{ width: "15px", marginRight: "5px" }} />
                {props.location}
              </CardItem>
            )}
            {props.remote === true && (
              <CardItem>
                <Home style={{ width: "15px", marginRight: "5px" }} />
                Aceita remoto
              </CardItem>
            )}
          </CardItemsContainer>
        </JobCardInfo>
      </CardInfoContainer>
      <CardButton
        style={{ color: "rgb(77, 77, 77)" }}
        href={props.url}
        target="_blank"
      >
        Saiba mais
      </CardButton>
    </Container>
  );
};
