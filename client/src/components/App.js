import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckLogin from "./CheckLogin";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div>
      <h2>Let's insert something in MYSQL database!</h2>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={CheckLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
