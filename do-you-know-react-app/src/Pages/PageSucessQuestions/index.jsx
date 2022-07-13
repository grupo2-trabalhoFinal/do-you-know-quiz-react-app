import { StyledBackButton, StyledSucessQuestionsContainer } from "./style";
import checkIcon from "../../Assets/checkIcon.svg";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const PageSucessQuestions = () => {
  const history = useHistory();

  const { countQuestion, setCountQuestion } = useContext(UserContext);
  console.log(countQuestion);

  return (
    <StyledSucessQuestionsContainer>
      <img src={checkIcon} alt="Icone de sucesso"></img>
      <h2>Perguntas Finalizadas!</h2>
      <h3>Você acertou {countQuestion} de 10 questões!</h3>
      <div>
        <StyledBackButton
          onClick={() => {
            history.push("/category");
            setCountQuestion(0);
          }}
        >
          Voltar para Categorias
        </StyledBackButton>

        <StyledBackButton
          onClick={() => {
            history.push("/ranking");
            setCountQuestion(0);
          }}
        >
          Ranking
        </StyledBackButton>
      </div>
    </StyledSucessQuestionsContainer>
  );
};

export default PageSucessQuestions;
