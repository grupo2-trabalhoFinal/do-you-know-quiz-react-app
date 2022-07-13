import Logo from "../../Assets/LOGO.svg";
import "./style.js";
import RankingOnline from "../../components/RankingOnline";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { RegisterContainer, ContentRanking } from "./style";
import userIcon from "../../Assets/userIcon.svg";

const RankingPage = () => {
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

  newRanking.splice(10, newRanking.length);

  return (
    <RegisterContainer>
      <h1>teste</h1>
      <img src={Logo} alt="Logo da página"></img>
      <ul>
        {newRanking.map((user, index) => (
          <ContentRanking key={user.id}>
            <img src={userIcon} alt="icone"></img>
            <h2>{user.name}</h2>
            <h2>{user.points} pontos</h2>
            <h2>#{index + 1}</h2>
          </ContentRanking>
        ))}
      </ul>
    </RegisterContainer>
  );
};

export default RankingPage;
