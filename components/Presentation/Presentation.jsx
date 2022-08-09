import { Container, TextPresentation, ImageContainer } from "./styles";

const Presentation = () => {
  return (
    <Container>
      <TextPresentation>
        Nós coletamos as melhores oportunidades para quem trabalha com{" "}
        <strong>Dados</strong>!
      </TextPresentation>
      <ImageContainer
        src="/assets/data-illustration.svg"
        alt="illustration"
        width={500}
        height={300}
      />
    </Container>
  );
};

export default Presentation;
