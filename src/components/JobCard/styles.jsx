import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 800px;
  margin-bottom: 30px;
  padding: 16px 32px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }

  img {
    width: 70px;
    border-radius: 50%;
    margin-right: 30px;
  }
`;

export const JobCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.darkPink};
`;

export const CardItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

export const CardButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: 5px;
  width: 165px;
  height: fit-content;
  border-radius: 10px;
  color: white !important ;
  background-color: ${COLORS.darkPink};
  text-align: center;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  color: ${COLORS.darkPink};
  border: 1px solid ${COLORS.darkPink};
  width: fit-content;
  padding: 1px 16px;
  font-size: 14px;
  margin-right: 10px;
`;

export const JobTitle = styled.div`
  font-size: 18px;
  color: ${COLORS.darkRed};
  font-weight: 700;
  text-decoration: none;
  margin-top: 10px;
`;
