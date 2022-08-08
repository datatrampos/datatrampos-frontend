import React from "react";
import {
  Container,
  JobCardInfo,
  CompanyName,
  JobTitle,
  CardItemsContainer,
  CardItem,
  CardButton,
  CardInfoContainer,
  CompanyWithoutLogo,
  LogoContainer,
} from "./styles";
import { Home, LocationCity } from "@material-ui/icons";

export const JobCard = (props) => {
  return (
    <Container>
      <CardInfoContainer>
        <LogoContainer>
          {props.logo ? (
            <img
              src={`data:image/jpeg;base64,${props.logo}`}
              alt={`${props.companyName}-logo`}
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
