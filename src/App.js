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
      DrawerOpen: false,
      SearchOpen: false,
      QuickCartOpen: false,
      UserSignedIn: false
    };
  }

  //Nav Drawer
  ToggleDrawer = () => {
    this.setState(prevState => {
      return { DrawerOpen: !prevState.DrawerOpen };
    });
  };
  CloseDrawer = () => {
    this.setState({ DrawerOpen: false });
  };

  //Search DropDown
  ToggleSearch = () => {
    this.setState(prevState => {
      return { SearchOpen: !prevState.SearchOpen };
    });
  };
  CloseSearch = () => {
    this.setState({ SearchOpen: false });
  };
  render() {
    return (
      <div className="App">
        <div className="AppInner">
          <FullNav
            ToggleSearch={this.ToggleSearch}
            CloseSearch={this.CloseSearch}
            SearchStatus={this.state.SearchOpen}
          />
          <MobileNav
            ToggleDrawer={this.ToggleDrawer}
            ToggleSearch={this.ToggleSearch}
            CloseSearch={this.CloseSearch}
            SearchStatus={this.state.SearchOpen}
          />
          <NavDrawer
            CloseDrawer={this.CloseDrawer}
            DrawerStatus={this.state.DrawerOpen}
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
