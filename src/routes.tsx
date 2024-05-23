import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
const Routes = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/*" component={Home} />
      </div>
    </Router>
  );
};

export default Routes;
