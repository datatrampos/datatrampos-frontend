import { Container, TextPresentation, ImageContainer } from "./styles";

const Presentation = () => {
  return (
    <Container>
      <TextPresentation>
        Nós coletamos as melhores oportunidades para quem trabalha com{" "}
        <strong>Dados</strong>!
      </TextPresentation>
      <ImageContainer
        src={require("../../assets/data-illustration.svg").default}
        alt="illustration"
      />
    </Container>
  );
};

export default Presentation;
