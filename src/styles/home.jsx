import Image from "next/image";
import styled from "styled-components";
import { COLORS } from "./colors";

export const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 0 200px 0;
`;

export const JobFilter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  width: 100%;
`;

export const InputContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  option,span{
    color: ${COLORS.darkGreyCian};
    font-weight: 100;
  }
`;

export const Label = styled.label`
  color: ${COLORS.light};
  font-size: 17px;
  margin-right: 7px;
`;

export const OptionLogo = styled(Image)`
  width: 30px;
  border-radius: 5px;
`;

export const NoLogo = styled.span`
  color: ${COLORS.darkPink};
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  width: 30px;
`;

export const FeaturedJobsContainer = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${COLORS.white} 0%,
    ${COLORS.lightGrey} 50%,
    ${COLORS.white} 100%
  );
`;

export const OptionLogoContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-weight: 500;
`;
