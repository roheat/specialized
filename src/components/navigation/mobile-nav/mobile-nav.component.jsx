import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import NavDrawer from "../nav-drawer/nav-drawer.component";
import { auth } from "../../../firebase/firebase.utils";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import CartIcon from "../../cart-icon/cart-icon.component";

import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { selectCartHidden } from "../../../redux/cart/cart.selectors";

import "./mobile-nav.styles.scss";

class MobileNav extends React.Component {
  constructor() {
    super();
    this.state = { isSearchOpen: false, isDrawerOpen: false };
  }

  toggleDrawer = () => {
    this.setState(prevState => {
      return { isDrawerOpen: !prevState.isDrawerOpen };
    });
  };
  closeDrawer = () => {
    this.setState({ isDrawerOpen: false });
  };

  //Search DropDown
  toggleSearch = () => {
    this.setState(prevState => {
      return { isSearchOpen: !prevState.isSearchOpen };
    });
  };

  closeSearch = () => {
    this.setState({ isSearchOpen: false });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    let MobileSearchFieldClasses = "mobile-nav-searchDrawer";
    if (this.state.isSearchOpen) {
      MobileSearchFieldClasses = "mobile-nav-searchDrawer active-mobile-search";
    }

    const { currentUser, hidden } = this.props;

    return (
      <div className="mobile-nav">
        <div className="mobile-navWrap">
          <div className="mobile-nav-topRow">
            <p className="mobile-nav-shippingOffer">
              FREE SHIPPING ON ALL ORDERS OVER $150.
            </p>
          </div>

          <div className="mobile-nav-bottomRow">
            <div className="mobile-nav-leftIcons">
              <div
                className="mobile-nav-leftIcon mobile-nav-menuIcon"
                onClick={this.toggleDrawer}
              ></div>
              <div
                className="mobile-nav-leftIcon mobile-nav-searchIcon"
                onClick={this.toggleSearch}
              ></div>
            </div>

            <Link to="/" className="mobile-nav-logo"></Link>

            <div className="mobile-nav-rightIcons">
              {currentUser ? (
                <div
                  className="mobile-nav-rightIcon mobile-nav-logoutIcon"
                  onClick={() => auth.signOut()}
                ></div>
              ) : (
                <Link
                  to="/sign-in"
                  className="mobile-nav-rightIcon mobile-nav-userIcon"
                ></Link>
              )}
              <CartIcon />
            </div>
          </div>

          <div className={MobileSearchFieldClasses}>
            <div className="mobile-nav-searchDrawerWrap">
              <form
                onSubmit={this.handleSubmit}
                action="/"
                className="mobile-nav-searchForm"
              >
                <div className="mobile-nav-searchField">
                  <input
                    type="search"
                    name="Nav Search"
                    className="mobile-nav-searchFieldInput"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="mobile-nav-searchButton"
                  onClick={this.closeSearch}
                >
                  SEARCH
                </button>
              </form>
            </div>
          </div>
        </div>
        <NavDrawer
          closeDrawer={this.closeDrawer}
          drawerStatus={this.state.isDrawerOpen}
        />
        {!hidden && <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(MobileNav);
