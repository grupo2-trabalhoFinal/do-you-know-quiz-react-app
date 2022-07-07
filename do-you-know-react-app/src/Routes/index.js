import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SuccessfulRegisterPage from "../Pages/SuccessfulRegisterPage";


function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route exact path="/successful-register">
        <SuccessfulRegisterPage />
      </Route>
      
      
    </Switch>
  );
}

export default Routes;
