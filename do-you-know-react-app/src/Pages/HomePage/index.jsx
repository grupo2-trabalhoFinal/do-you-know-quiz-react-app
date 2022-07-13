import {
  GoToLoginButton,
  GoToRegisterButton,
  HomePageContainer,
} from "./style";
import Logo from "../../Assets/LOGO.svg";
import { Redirect, useHistory } from "react-router-dom";

const HomePage = ({auth,setAuth}) => {
  const history = useHistory();

  //ONCLICK NOS BUTTONS PARA REDIRECIONAMENTO ATÉ AS PAGINAS DO FORMULÁRIO.

  if (auth) {
    history.push("/home");
  }
  return (
    <HomePageContainer>
      <img src={Logo} alt="Logo" />
      <GoToRegisterButton onClick={() => history.push("/register")}>
        CADASTRO
      </GoToRegisterButton>
      <GoToLoginButton onClick={() => history.push("/login")}>
        LOGIN
      </GoToLoginButton>
    </HomePageContainer>
  );
};

export default HomePage;
