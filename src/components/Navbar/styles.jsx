import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import background from "../../assets/background-gradient.svg";

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
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: ${COLORS.white};
    font-size: 32px;
  }

  img {
    width: 400px;
  }
`;

export const ImageContainer = styled.div`
  /* background-image: url(${background}); */
  background-color: ${COLORS.darkPink};
  background-position: center;
  background-size: contain;
  padding: 30px 0px 50px 0px;
  /* filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.2)); */
`;

export const Container = styled.div`
  /* background-color: ${COLORS.darkRed}; */
`;
