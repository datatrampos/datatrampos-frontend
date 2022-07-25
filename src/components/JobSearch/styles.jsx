import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const JobList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding-right: 90px;
  padding-left: 90px;
`;

export const JobFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${COLORS.darkRed};
  width: 100%;
  border-radius: 20px;
  padding: 20px;
`;

export const InputContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const Label = styled.label`
  color: ${COLORS.white};
  font-size: 17px;
  margin-right: 7px;
`;

export const Select = styled.select``;

export const OptionLogo = styled.img`
  width: 30px;
  margin-right: 5px;
`;
