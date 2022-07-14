import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import CategoryPage from "../Pages/CategoryPage";
import HomePage from "../Pages/HomePage";
import FirstPage from "../Pages/FirstPage";
import LoginPage from "../Pages/LoginPage";
import PreQuestion from "../Pages/PreQuestion";
import QuestionPage from "../Pages/QuestionPage";
import RegisterPage from "../Pages/RegisterPage";
import SuccessfulRegisterPage from "../Pages/SuccessfulRegisterPage";
import PageSucessQuestions from "../Pages/PageSucessQuestions";
import RankingPage from "../Pages/Ranking page";
import { AnimatePresence } from "framer-motion";

function Routes() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@quizToken"))
  );

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@quizToken"));

    if (token) {
      return setAuth(true);
    } else {
      return setAuth(false);
    }
  }, [token]);

  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <HomePage auth={auth} setAuth={setAuth} />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/login">
          <LoginPage auth={auth} setAuth={setAuth} />
        </Route>
        <Route exact path="/successful-register">
          <SuccessfulRegisterPage />
        </Route>
        <Route exact path="/home">
          <FirstPage auth={auth} setAuth={setAuth} />
        </Route>
        <Route exact path="/ranking">
          <RankingPage />
        </Route>
        <Route exact path="/prequestion">
          <PreQuestion />
        </Route>
        <Route exact path="/question">
          <QuestionPage auth={auth} />
        </Route>
        <Route exact path="/category">
          <CategoryPage auth={auth} />
        </Route>

        <Route exact path="/sucessful-questions">
          <PageSucessQuestions />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;
