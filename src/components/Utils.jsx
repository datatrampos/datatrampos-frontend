import styled from "styled-components";
import { COLORS } from "../styles/colors";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.center ? "center" : "baseline")};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0px 20px;
`;

export const Logo = styled.p`
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  font-size: 28px;
`;

export const Button = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: rgb(77, 77, 77);
  padding: 5px;
  font-weight: bold;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 2px ${COLORS.darkPink};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

export const SecondaryButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${COLORS.darkPink};
  padding: 5px;
  border: 1px solid ${COLORS.darkPink};
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
    border: 1px solid transparent;
    background-color: ${COLORS.darkPink};
  }
`;

export const PageTitle = styled.p`
  font-size: 35px;
  font-weight: 600;
  color: ${COLORS.darkRed};
  margin: 50px 0px 50px 0px;
  text-align: center;
`;
