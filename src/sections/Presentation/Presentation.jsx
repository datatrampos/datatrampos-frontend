import { Container, TextPresentation, ImageContainer } from "./styles";

const Presentation = () => {
  return (
    <Container>
        <TextPresentation>
          Nós coletamos as melhores oportunidades para quem trabalha com{" "}
          <strong>Dados</strong>!
        </TextPresentation>
        <ImageContainer />
    </Container>
  );
};

export default Presentation;
