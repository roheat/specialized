import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.component";
import BikesPage from "./pages/bikes/bikes.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import FullNav from "./components/navigation/full-nav/full-nav.component";
import MobileNav from "./components/navigation/mobile-nav/mobile-nav.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <div className="AppInner">
          <FullNav currentUser={currentUser} />
          <MobileNav currentUser={currentUser} />

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

export default App;
