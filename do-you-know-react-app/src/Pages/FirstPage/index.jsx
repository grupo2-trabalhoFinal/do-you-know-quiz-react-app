import { FirstPageContainer, ButtonFirstPage } from "./style";
import Logo from "../../Assets/LOGO.svg";
import Pessoa from "../../Assets/Pessoa.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ButtonBack from "../../components/ButtonBack";

const FirstPage = () => {
  const { userName, changeName } = useContext(UserContext);

  console.log(userName);
  return (
    <FirstPageContainer>
      <img src={Logo} alt="Logo" />
      <div className="person">
        <img src={Pessoa} alt="profile pic" />
        <span>{userName}</span>
      </div>
      <ButtonFirstPage onClick={() => changeName("raquelzinha")}>
        Jogar
      </ButtonFirstPage>
      <ButtonFirstPage>Ranking</ButtonFirstPage>
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
