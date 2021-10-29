import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import CoinPage from "./pages/CoinPage";
import Alert from "./components/Alert";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </Switch>
      <Alert />
    </Router>
  );
}

export default App;
