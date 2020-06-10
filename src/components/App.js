import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Platform from "./Platform";
import Sessions from "./Sessions";

import history from "../history";

const App = () => {
  return (
    <div>
      {
        <Router history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/sessions" exact component={Sessions} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/platform" exact component={Platform} />
        </Router>
      }
    </div>
  );
};

export default App;
