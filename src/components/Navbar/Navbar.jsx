import Logo from "../../assets/datatrampos-text.svg";
import { Nav } from "./styles";

function Navbar() {
  return (
    <Nav>
      <div>
        <a href="/sobre">Sobre</a>
        <a href="http://localhost:3000">
          <img src={Logo} alt="datatrampos-logo-title" />
        </a>
        <a href="/empresas">Empresas</a>
      </div>
    </Nav>
  );
}

export default Navbar;
