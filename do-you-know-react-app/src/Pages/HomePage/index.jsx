import {
  GoToLoginButton,
  GoToRegisterButton,
  HomePageContainer,
} from "./style";
import Logo from "../../Assets/LOGO.svg";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = ({ auth, setAuth }) => {
  const history = useHistory();

  if (auth) {
    history.push("/home");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HomePageContainer>
        <img src={Logo} alt="Logo" />
        <GoToRegisterButton onClick={() => history.push("/register")}>
          CADASTRO
        </GoToRegisterButton>
        <GoToLoginButton onClick={() => history.push("/login")}>
          LOGIN
        </GoToLoginButton>
      </HomePageContainer>
    </motion.div>
  );
};

export default HomePage;
