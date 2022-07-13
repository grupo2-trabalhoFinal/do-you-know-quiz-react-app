import { FirstPageContainer, ButtonFirstPage } from "./style";
import Logo from "../../Assets/LOGO.svg";
import Pessoa from "../../Assets/Pessoa.svg";
import { Redirect, useHistory } from "react-router-dom";
import ButtonBack from "../../components/ButtonBack";

const FirstPage = ({ auth, setAuth }) => {
  const userName = JSON.parse(localStorage.getItem("@userName"));

  const history = useHistory();

  if (!auth) {
    history.push("/");
  }
  return (
    <FirstPageContainer>
      <img src={Logo} alt="Logo" />
      <div className="person">
        <img src={Pessoa} alt="Pessoa" />
        <span>{userName}</span>
      </div>
      <ButtonFirstPage onClick={() => history.push("/category")}>
        Jogar
      </ButtonFirstPage>
      <ButtonFirstPage onClick={() => history.push("/ranking")}>
        Ranking
      </ButtonFirstPage>
      <ButtonBack
        text={"sair"}
        backgroundColorButton={"#fff"}
        fontSizeText={"2rem"}
        color={"#1E4E9D"}
        route={"/"}
      />
    </FirstPageContainer>
  );
};

export default FirstPage;
