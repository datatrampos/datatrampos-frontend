import Logo from "../../assets/datatrampos-text.svg";
import { Nav, ImageContainer, Container } from "./styles";

function Navbar() {
  return (
    <Container>
      <ImageContainer>
        <Nav>
          <div>
            <a href="/">
              <img src={Logo} alt="datatrampos-logo-title" />
            </a>
          </div>
        </Nav>
      </ImageContainer>
    </Container>
  );
}

export default Navbar;
