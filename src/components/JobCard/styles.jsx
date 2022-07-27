import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 800px;
  margin-bottom: 20px;
  padding: 12px 28px;
  border-radius: 20px;
  border:1px solid ${COLORS.white} ;
  background-color: white;
  /* box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1); */
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
    /* border:1px solid ${COLORS.darkRed} ; */
  }

  img {
    width: 70px;
    border-radius: 50%;
    margin-right: 30px;
    border:2px solid ${COLORS.darkRed} ;
  }
`;

export const JobCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.darkPink};
`;

export const CardItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
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

  &:hover {
    background-color: ${COLORS.darkRed};
    color: ${COLORS.darkPink} !important;
  }
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
  font-weight: 800;
  text-decoration: none;
  margin-top: 10px;
`;
