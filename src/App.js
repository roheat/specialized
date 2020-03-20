import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.component";
import BikesPage from "./pages/bikes/bikes.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import FullNav from "./components/navigation/full-nav/full-nav.component";
import MobileNav from "./components/navigation/mobile-nav/mobile-nav.component";

const App = () => (
  <div className="App">
    <div className="AppInner">
      <FullNav />
      <MobileNav />

      <div className="AppContentWrap">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/bikes" component={BikesPage} />
          <Route exact path="/sign-in" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
