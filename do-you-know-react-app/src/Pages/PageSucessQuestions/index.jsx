import { StyledBackButton, StyledSucessQuestionsContainer } from "./style";
import checkIcon from "../../Assets/checkIcon.svg";
import { useHistory } from "react-router-dom";

const PageSucessQuestions = () => {
  const history = useHistory();

  return (
    <StyledSucessQuestionsContainer>
      <img src={checkIcon} alt="Icone de sucesso"></img>
      <h2>Perguntas Finalizadas!</h2>
      <h3>Você acertou 0/0</h3>

      <StyledBackButton onClick={() => history.push("/category")}>
        Voltar para Categorias
      </StyledBackButton>
    </StyledSucessQuestionsContainer>
  );
};

export default PageSucessQuestions;
