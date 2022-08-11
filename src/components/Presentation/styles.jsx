import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import Image from "next/image";

export const ImageContainer = styled(Image)`

  width: 510px;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Container = styled.div`
  background-image: linear-gradient(${COLORS.darkPink}, ${COLORS.darkRed});
  padding: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TextPresentation = styled.h1`
  color: ${COLORS.white};
  width: 400px;
  font-weight: 100;
  font-size: 40px;
  margin-right: 30px;

  strong {
    font-weight: bold;
  }
`;
