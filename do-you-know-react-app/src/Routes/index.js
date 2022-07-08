import { Switch, Route } from "react-router-dom";
import CategoryPage from "../Pages/CategoryPage";
import HomePage from "../Pages/HomePage";
import FirstPage from "../Pages/FirstPage"
import LoginPage from "../Pages/LoginPage";
import PreQuestion from "../Pages/PreQuestion";
import QuestionPage from "../Pages/QuestionPage";
import RegisterPage from "../Pages/RegisterPage";

import SuccessfulRegisterPage from "../Pages/SuccessfulRegisterPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage/>
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
      <Route exact path="/home">
        <FirstPage></FirstPage>
      </Route>
      <Route exact path="/prequestion">
        <PreQuestion />
      </Route>
      <Route exact path="/question">
        <QuestionPage />
      </Route>
      <Route exact path="/category">
        <CategoryPage />
      </Route>
    </Switch>
  );
}

export default Routes;
