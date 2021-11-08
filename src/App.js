import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Results from "./components/Results";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/welcome" component={Start} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </Switch>
    </Fragment>
  );
}
