import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/home/home.component";
import BikesPage from "./pages/bikes/bikes.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import InsideSpecialized from "./pages/inside-specialized/inside-specialized.component";
import NotFoundPage from "./pages/404/404.component";

import FullNav from "./components/navigation/full-nav/full-nav.component";
import MobileNav from "./components/navigation/mobile-nav/mobile-nav.component";
import FullFooter from "./components/footer/full-footer/full-footer.component";
import MobileFooter from "./components/footer/mobile-footer/mobile-footer.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import ScrollToTop from "./utils/scrollToTop";

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
      <ScrollToTop>
        <div className="App">
          <div className="AppInner">
            <FullNav />
            <MobileNav />

            <div className="AppContentWrap">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={BikesPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                  exact
                  path="/inside-specialized"
                  component={InsideSpecialized}
                />
                <Route
                  exact
                  path="/sign-in"
                  render={() =>
                    this.props.currentUser ? (
                      <Redirect to="/" />
                    ) : (
                      <SignInAndSignUpPage />
                    )
                  }
                />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
            <FullFooter />
            <MobileFooter />
          </div>
        </div>
      </ScrollToTop>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
