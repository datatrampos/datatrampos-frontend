import Image from "next/image";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 0;
`;

export const JobFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.darkGrey};
  width: 100%;
  padding: 40px 20px;
`;

export const InputContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const Label = styled.label`
  color: ${(props) => (props.red ? COLORS.darkGrey : COLORS.white)};
  font-size: 17px;
  margin-right: 7px;
`;

export const OptionLogo = styled(Image)`
  width: 30px;
  margin-right: 5px;
  border-radius: 50%;
`;

export const NoLogo = styled.span`
  color: ${COLORS.darkPink};
  text-align: center;
  margin-right: 5px;
  font-weight: 700;
  font-size: 18px;
  width: 30px;
`;
