import Image from "next/image";
import { Nav, ImageContainer, Container, Logo } from "./styles";
import Link from "next/link";

function Navbar() {
  return (
    <Container>
      <Nav>
        <div>
          <Link href="/">
            <ImageContainer>
              <Image
                src="/assets/datatrampos-text-dark-pink.svg"
                alt="datatrampos-logo-title"
                layout="fill"
              />
            </ImageContainer>
          </Link>
        </div>
      </Nav>
    </Container>
  );
}

export default Navbar;
