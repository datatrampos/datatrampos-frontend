import { GitHub, Instagram } from "@mui/icons-material";
import { Logo, FooterContainer } from "./styles";

function FooterInfo() {
  return (
    <>
      <FooterContainer>
        <Logo src="/assets/datatrampos-text.svg" alt={"datatrampos-logo-title"} width={300} height={300}/>
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

export default FooterInfo;
