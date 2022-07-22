import styled from "styled-components";
import { COLORS } from "../../styles/colors";

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
