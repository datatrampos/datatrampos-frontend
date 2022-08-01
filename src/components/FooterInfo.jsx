import { GitHub, Instagram } from "@material-ui/icons";
import styled from "styled-components";
import Logo from "../assets/datatrampos-text.svg";

function FooterInfo() {
  return (
    <>
      <FooterContainer>
        <img src={Logo} alt="datatrampos-logo-title" />
        <p>As melhores oportunidades em Dados nas melhores empresas!</p>
        {/* <div>
          <a href="/about">Sobre nós</a>
          <span>•</span>
          <a href="/jobs">Vagas</a>
          <span>•</span>
          <a href="/companies">Empresas</a>
        </div> */}
        <div>
          <a href="https://instagram.com/datatrampos">
            <Instagram style={{ marginRight: "10px" }} />
          </a>
          <a href="https://github.com/luisgmfarias">
            <GitHub />
          </a>
        </div>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  background-color: #f70656;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  color: white;

  p {
    font-size: 13px;
    margin: 13px 0;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    span {
      margin: 0 5px;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  img {
    width: 300px;
  }
`;

export default FooterInfo;
