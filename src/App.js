import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages";
import { NavBar } from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/about">
            {/* <Home /> */}
            <h1>about</h1>
          </Route>
          <Route exact path="/contact">
            {/* <DataEntry /> */}
            <h1>contact</h1>
          </Route>
          <Route exact path="/services">
            <h1>services</h1>
            {/* <Policy /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
