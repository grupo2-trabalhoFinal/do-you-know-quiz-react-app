import {
  GoToLoginButton,
  GoToRegisterButton,
  HomePageContainer,
} from "./style";
import Logo from "../../Assets/LOGO.svg";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  //ONCLICK NOS BUTTONS PARA REDIRECIONAMENTO ATÉ AS PAGINAS DO FORMULÁRIO.

  return (
    <HomePageContainer>
      <img src={Logo} alt="Logo" style={{ width: "80vw" }} />
      <GoToRegisterButton>CADASTRO</GoToRegisterButton>
      <GoToLoginButton>LOGIN</GoToLoginButton>
    </HomePageContainer>
  );
};

export default HomePage;
