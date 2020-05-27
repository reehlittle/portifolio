import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import Initial from "./pages/Initial";
import Terms from "./pages/Terms";
import History from "./services/history";

export default function Routes() {
  return (
    <Router history={History}>
      <Switch>
        <Route path="/" exact component={Initial} />
        <Route path="/cookieClicker/term" component={Terms} />
      </Switch>
    </Router>
  );
}
