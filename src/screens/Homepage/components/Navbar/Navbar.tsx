import Image from 'next/image'
import { Nav, ImageContainer, Container } from './styles'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <Container>
      <Nav>
        <div>
          <Link href="/">
            <ImageContainer>
              <Image
                src="/assets/datatrampos-text-dark-pink.svg"
                alt="datatrampos-logo-title"
                fill
              />
            </ImageContainer>
          </Link>
        </div>
      </Nav>
    </Container>
  )
}
