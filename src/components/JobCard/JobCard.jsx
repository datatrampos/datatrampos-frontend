import React from "react";
import { Row } from "../Utils";
import {
  Container,
  JobCardInfo,
  CompanyName,
  JobTitle,
  CardItemsContainer,
  CardItem,
  CardButton,
} from "./styles";
import { Home, LocationCity } from "@material-ui/icons";

export const JobCard = (props) => {
  return (
    <Container>
      <Row center>
        <img src={`data:image/jpeg;base64,${props.logo}`} alt={`${props.companyName}-logo`} />
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
      </Row>
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
