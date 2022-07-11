import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import PreQuestion from "../Pages/PreQuestion";
import QuestionPage from "../Pages/QuestionPage";
import RegisterPage from "../Pages/RegisterPage";
import ScoreRankingPage from "../Pages/ScoreRankingPage";
import ScorePontuation from "../Pages/ScorePontuation";
import SuccessfulRegisterPage from "../Pages/SuccessfulRegisterPage";

//depois de colocar a page "preQuestion" no useHistory, retirar ela daqui da rota

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/successful-register">
        <SuccessfulRegisterPage />
      </Route>
      <Route exact path="/prequestion">
        <PreQuestion />
      </Route>
      <Route exact path="/question">
        <QuestionPage />
      </Route>
      <Route exact path="/score-pontuation">
        <ScorePontuation />
      </Route>
      <Route exact path="/score-ranking-page">
        <ScoreRankingPage />
      </Route>
    </Switch>
  );
}

export default Routes;
