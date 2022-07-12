import {
  GoToLoginButton,
  GoToRegisterButton,
  HomePageContainer,
} from "./style";
import Logo from "../../Assets/LOGO.svg";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

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
