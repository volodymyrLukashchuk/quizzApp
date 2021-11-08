import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </Fragment>
  );
}
