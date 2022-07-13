import { useState } from "react";
import api from "../../services/api";

const RankingOnline = () => {
  const [ranking, setRanking] = useState([]);

  async function neymar() {
    const coutinho = await api
      .get("/users")
      .then((res) =>
        setRanking(...ranking, `${res.data.name}: ${res.data.points}`)
      );
    return coutinho;
  }
  neymar();

  console.log(neymar);
};

export default RankingOnline;
