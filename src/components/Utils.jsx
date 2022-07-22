import styled from "styled-components";

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

export const Logo = styled.h1`
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
    border-bottom: solid 2px #f70656;
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
  color: #f70656;
  padding: 5px;
  border: 1px solid #f70656;
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
    background-color: #f70656;
  }
`;

export const PageTitle = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: #f70656;
  margin: 50px 0px 50px 0px;
  text-align: center;
`;
