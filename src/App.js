import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Donate from "./pages/Donate";
import CoinPage from "./pages/CoinPage";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/coins/:id" component={CoinPage} />
        <Route path="/signin" component={Donate} exact />
      </Switch>
    </Router>
  );
}

export default App;
