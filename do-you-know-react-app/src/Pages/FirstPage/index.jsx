import { FirstPageContainer, ButtonFirstPage } from "./style";
import Logo from "../../Assets/LOGO.svg";
import Pessoa from "../../Assets/Pessoa.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

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
    </FirstPageContainer>
  );
};

export default FirstPage;
