import { Container, HeaderPresentation, ImageContainer } from './styles'
import Image from 'next/image'

export const OpeningSection = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/assets/data-illustration.svg"
          alt="illustration"
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <HeaderPresentation>
        Nós coletamos as melhores oportunidades para quem trabalha com{' '}
        <u>Dados</u>.
      </HeaderPresentation>
    </Container>
  )
}
