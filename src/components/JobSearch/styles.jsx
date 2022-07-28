import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const JobList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const JobFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center ;
  background-color: ${COLORS.darkRed};
  width: 100%;
  padding: 40px 20px;
`;

export const InputContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const Label = styled.label`
  color: ${(props) => (props.red ? COLORS.darkRed : COLORS.white)};
  font-size: 17px;
  margin-right: 7px;
`;

export const Select = styled.select``;

export const OptionLogo = styled.img`
  width: 30px;
  margin-right: 5px;
  border-radius: 50%;
`;
