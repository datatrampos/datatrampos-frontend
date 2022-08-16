import { GitHub, Instagram } from "@mui/icons-material";
import { Logo, FooterContainer, ImageContainer } from "./styles";

function FooterInfo() {
  return (
    <>
      <FooterContainer>
        <ImageContainer>
          <Logo
            src="/assets/datatrampos-text.svg"
            alt={"datatrampos-logo-title"}
            layout="fill"
          />
        </ImageContainer>
        <p>As melhores oportunidades em Dados nas melhores empresas!</p>
        {/* <div>
        <a href="/about">Sobre nós</a>
        <span>•</span>
        <a href="/jobs">Vagas</a>
        <span>•</span>
        <a href="/companies">Empresas</a>
        </div> */}
        <div>
          <a href="https://instagram.com/datatrampos" style={{ marginRight: "10px" }}>
            <Instagram />
          </a>
          <a href="https://github.com/luisgmfarias">
            <GitHub />
          </a>
        </div>
      </FooterContainer>
    </>
  );
}

export default FooterInfo;
