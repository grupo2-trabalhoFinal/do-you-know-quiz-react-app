import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import CategoryPage from "../Pages/CategoryPage";
import HomePage from "../Pages/HomePage";
import FirstPage from "../Pages/FirstPage";
import LoginPage from "../Pages/LoginPage";
import PreQuestion from "../Pages/PreQuestion";
import QuestionPage from "../Pages/QuestionPage";
import RegisterPage from "../Pages/RegisterPage";

import SuccessfulRegisterPage from "../Pages/SuccessfulRegisterPage";
import { useEffect } from "react";
import PageSucessQuestions from "../Pages/PageSucessQuestions";

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

  return (
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
        <FirstPage auth={auth} setAut={setAuth}></FirstPage>
      </Route>
      <Route exact path="/prequestion">
        <PreQuestion />
      </Route>
      <Route exact path="/question">
        <QuestionPage auth={auth}/>
      </Route>
      <Route exact path="/category">
        <CategoryPage auth={auth} setAuth={setAuth} />
      </Route>

      <Route exact path="/sucessful-questions">
        <PageSucessQuestions />
      </Route>
    </Switch>
  );
}

export default Routes;
