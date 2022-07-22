import styled from "styled-components";
import { Button, Col } from "../../components/Utils";
import Nav from "../../components/Navbar/Navbar";
import Fade from "react-reveal/Fade";
import background from "../../assets/background-gradient.svg";
import illustration from "../../assets/data-illustration.svg";

function Presentation() {
  return (
    <ImageContainer>
      <Nav />
      <PresentationContainer>
        <Col>
          <Header>
            A plataforma que reúne as melhores vagas de Dados do Brasil!
          </Header>
          <a alt="vacancies" href="#vagas">
            Vagas em aberto
          </a>
        </Col>
        <img alt="illustration" src={illustration} />
      </PresentationContainer>
    </ImageContainer>
  );
}

export default Presentation;

const ImageContainer = styled.div`
  background: url(${background}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: 40px;
  width: 100%;
  height: 1200px;
`;

const Header = styled.h1`
  font-size: 64px;
  font-weight: bolder;
  width: 750px;
`;

const PresentationContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 122px;
  a {
    margin-top: 25px;
    font-size: 40px;
    text-decoration: none;
    color: white;
    position: relative;
    width: max-content;
    padding-bottom: 5px;
  }

  a:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  img {
    margin-left: 105px;
  }
`;
