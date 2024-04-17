import {
  Container,
  TextPresentation,
  HeaderPresentation,
  ImageContainer,
} from './styles'
import Image from 'next/image'

export const OpeningSection = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/assets/data-illustration.svg"
          alt="illustration"
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <HeaderPresentation>
        Nós coletamos as melhores oportunidades para quem trabalha com{' '}
        <u>Dados</u>.
      </HeaderPresentation>

      <TextPresentation>
        Nossa equipe fez uma coleta de todas as vagas relacionadas a área de
        <strong> Data</strong>, nas melhores empresas da América Latina.{' '}
        <a href="#vagas">
          <strong>Encontre sua melhor oportunidade</strong>
        </a>
        .
      </TextPresentation>
    </Container>
  )
}
