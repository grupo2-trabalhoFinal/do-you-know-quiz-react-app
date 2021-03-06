import { SuccessfulPageContainer, SuccessPageButton } from "./style";
import checkIcon from "../../Assets/checkIcon.svg";
import { useHistory } from "react-router-dom";

const SuccessfulRegisterPage = () => {
  const history = useHistory();
  //ONCLICK NO BUTTON REDIRECT PARA FORMULARIO DE LOGIN

  return (
    <SuccessfulPageContainer>
      <img src={checkIcon} alt="Icone de sucesso"></img>
      <h2>CADASTRO EFETUADO COM SUCESSO!</h2>
      <SuccessPageButton onClick={() => history.push("/login")}>
        LOGIN
      </SuccessPageButton>
    </SuccessfulPageContainer>
  );
};

export default SuccessfulRegisterPage;
