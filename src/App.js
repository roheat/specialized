import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./home.component";
function Bikes() {
  return (
    <div>
      <h1>Bikes</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop/bikes" component={Bikes} />
      </Switch>
    </div>
  );
}

export default App;
