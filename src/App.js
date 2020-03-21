import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/home/home.component";
import BikesPage from "./pages/bikes/bikes.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import FullNav from "./components/navigation/full-nav/full-nav.component";
import MobileNav from "./components/navigation/mobile-nav/mobile-nav.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.scss";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
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
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
