import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import PreQuestion from "../Pages/PreQuestion";
import QuestionPage from "../Pages/QuestionPage";

import SuccessfulRegisterPage from "../Pages/SuccessfulRegisterPage";

//depois de colocar a page "preQuestion" no useHistory, retirar ela daqui da rota

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
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
    </Switch>
  );
}

export default Routes;
