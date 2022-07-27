import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import image from "../../assets/software-developers-group.jpg";

export const ImageContainer = styled.img`
  /* background-image: linear-gradient(
      rgba(98, 3, 35, 0.65),
      rgba(98, 3, 35, 0.35)
    ),
    url(${image}); */
  /* background-position: center center;
  background-size: cover;
  background-repeat: no-repeat; */
  /* border-radius: 35px; */
  
  width: 510px;
  /* 
  height: 287px; */
  /* filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2)); */
`;

export const Container = styled.div`
  /* background-color: ${COLORS.darkRed}; */
  background-image: linear-gradient(${COLORS.darkPink}, ${COLORS.darkRed});
  padding: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
