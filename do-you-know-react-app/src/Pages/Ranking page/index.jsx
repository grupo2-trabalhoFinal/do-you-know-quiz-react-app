import {
  StyledButton,
  StyledContainerItem,
  StyledContainerList,
} from "./style";
import Logo from "../../Assets/LOGO.svg";
import "./style.js";
import RankingOnline from "../../components/RankingOnline";
import { useEffect, useState } from "react";
import api from "../../services/api";

import Pessoa from "../../Assets/Pessoa.svg";
import { StyledContainerPerson } from "../../components/ButtonBack/style";
import { useHistory } from "react-router-dom";

const RankingPage = () => {
  const history = useHistory();

  function startRanking() {
    api.get("/users").then((res) => setRanking(res.data));
  }
  const [ranking, setRanking] = useState([]);
  console.log(ranking);

  const newRanking = ranking.sort(function (a, b) {
    if (a.points > b.points) {
      return -1;
    } else {
      return true;
    }
  });

  const userId = localStorage.getItem("@quizId");

  async function neymar() {
    const coutinho = await api
      .get(`/users/${userId}`)
      .then((res) => setPointsRanking(res.data.points));
    return coutinho;
  }
  const [pointsRanking, setPointsRanking] = useState(neymar);
  console.log(pointsRanking);

  useEffect(() => {
    startRanking();
  }, [pointsRanking]);

  return (
    <StyledContainerList>
      <img src={Logo} alt="Logo da página"></img>
      <ul>
        {newRanking.map((user, index) => (
          <StyledContainerItem key={user.id}>
            <li>
              <StyledContainerPerson>
                <img src={Pessoa} alt="people" />
                <h2>{user.name}</h2>
              </StyledContainerPerson>

              <h3>{user.points} pontos</h3>
            </li>
            <p>#{index}</p>
          </StyledContainerItem>
        ))}
      </ul>
      <StyledButton onClick={() => history.push("/")}>Voltar</StyledButton>
    </StyledContainerList>
  );
};

export default RankingPage;

//   function compare(a, b) {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     return 0;
//   }
