import { Home, LocationCity } from "@mui/icons-material";
import React from "react";
import {
  CardButton,
  CardInfoContainer,
  CardItem,
  CardItemsContainer,
  CompanyLogo,
  CompanyName,
  CompanyWithoutLogo,
  Container,
  JobCardInfo,
  JobTitle,
  LogoContainer,
  ImageContainer
} from "./styles";

export const JobCard = (props) => {
  return (
    <Container key={props.id}>
      <CardInfoContainer>
        <LogoContainer>
          {props.logo ? (
            <ImageContainer>
              <CompanyLogo
                src={`data:image/jpeg;base64,${props.logo}`}
                alt={`${props.companyName}-logo`}
                layout="fill"
                objectFit="contain"
              />
            </ImageContainer>
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
              <CardItem key={props.location}>
                <LocationCity style={{ width: "15px", marginRight: "5px" }} />
                {props.location}
              </CardItem>
            )}
            {props.remote === true && (
              <CardItem key={props.remoto}>
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
