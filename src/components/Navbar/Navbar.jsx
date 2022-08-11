import Image from "next/image";
import { Nav, ImageContainer, Container, Logo } from "./styles";
import Link from "next/link";

function Navbar() {
  return (
    <Container>
      <ImageContainer>
        <Nav>
          <div>
            <Link href="/">
              <Logo src='/assets/datatrampos-text.svg' alt="datatrampos-logo-title" width={300} height={300}/>
            </Link>
          </div>
        </Nav>
      </ImageContainer>
    </Container>
  );
}

export default Navbar;
