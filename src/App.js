import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home.component";
import Bikes from "./pages/bikes/bikes.component";
import FullNav from "./components/navigation/full-nav/full-nav.component";
import MobileNav from "./components/navigation/mobile-nav/mobile-nav.component";
import NavDrawer from "./components/navigation/nav-drawer/nav-drawer.component";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isDrawerOpen: false,
      isSearchOpen: false
    };
  }

  //Nav Drawer
  toggleDrawer = () => {
    this.setState(prevState => {
      return { isDrawerOpen: !prevState.isDrawerOpen };
    });
  };
  closeDrawer = () => {
    this.setState({ isDrawerOpen: false });
  };

  render() {
    return (
      <div className="App">
        <div className="AppInner">
          <FullNav />
          <MobileNav toggleDrawer={this.toggleDrawer} />
          <NavDrawer
            closeDrawer={this.closeDrawer}
            drawerStatus={this.state.isDrawerOpen}
          />
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
}

export default App;
