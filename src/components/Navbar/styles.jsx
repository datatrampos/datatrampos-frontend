import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import Image from "next/image";

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  div {
    width: 900px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: ${COLORS.white};
    font-size: 32px;
  }
`;

export const Logo = styled(Image)`
  width: 400px;

  @media (max-width: 900px) {
    width: 300px;
  }
`;

export const ImageContainer = styled.div`
  background-color: ${COLORS.darkPink};
  background-position: center;
  background-size: contain;
  padding: 30px 0px 50px 0px;

  @media (max-width: 900px) {
    padding: 30px 0px 15px 0px;
  }
`;

export const Container = styled.div`
  /* background-color: ${COLORS.darkRed}; */
`;
