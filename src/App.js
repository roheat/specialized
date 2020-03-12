import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home.component";
import Bikes from "./pages/bikes/bikes.component";

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
