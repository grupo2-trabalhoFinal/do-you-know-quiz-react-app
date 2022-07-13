import { RegisterContainer } from "./style";
import Logo from "../../Assets/LOGO.svg";
import "./style.js";
import { useEffect, useState } from "react";
import api from "../../services/api";

const RankingPage = () => {
  function startRanking() {
    api.get("/users").then((res) => setRanking(res.data));
  }
  const [ranking, setRanking] = useState([]);

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

  useEffect(() => {
    startRanking();
  }, [pointsRanking]);

  return (
    <RegisterContainer>
      <h1>teste</h1>
      <img src={Logo} alt="Logo da página"></img>
      <ul>
        {newRanking.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.points}</h3>
          </li>
        ))}
      </ul>
    </RegisterContainer>
  );
};

export default RankingPage;
