'use client';

import { COLORS } from "@/constants/colors";
import Image from "next/image";
import styled from "styled-components";

export const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-weight: 500;
`;

export const OptionLogoContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
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

export const InputContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const Label = styled.label<{isSecondary?: boolean}>`
  color: ${(props) => (props.isSecondary ? COLORS.darkGrey : COLORS.white)};
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
