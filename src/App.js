import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from "./pages";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="home" component={Home} exact />
        <Route path="/signin" component={Donate} exact />
      </Switch>
    </Router>
  );
}

export default App;
