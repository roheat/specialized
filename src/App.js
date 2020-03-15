import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home.component";
import Bikes from "./pages/bikes/bikes.component";

function App() {
  return (
    <div className="App">
      <div className="AppInner">
        <div className="AppContentWrap">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop/bikes" component={Bikes} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
