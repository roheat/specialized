import React from "react";
import "./mobile-nav.styles.scss";
import { Link } from "react-router-dom";
import NavDrawer from "../nav-drawer/nav-drawer.component";

export default class MobileNav extends React.Component {
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
    let MobileSearchFieldClasses = "MobileNav-SearchDrawer";
    if (this.state.isSearchOpen) {
      MobileSearchFieldClasses = "MobileNav-SearchDrawer ActiveMobileSearch";
    }

    return (
      <div className="MobileNav">
        <div className="MobileNavWrap">
          <div className="MobileNav-TopRow">
            <p className="MobileNav-ShippingOffer">
              FREE SHIPPING ON ALL ORDERS OVER $150.
            </p>
          </div>

          <div className="MobileNav-BottomRow">
            <div className="MobileNav-LeftIcons">
              <div
                className="MobileNav-LeftIcon MobileNav-MenuIcon"
                onClick={this.toggleDrawer}
              ></div>
              <div
                className="MobileNav-LeftIcon MobileNav-SearchIcon"
                onClick={this.toggleSearch}
              ></div>
            </div>

            <Link to="/" className="MobileNav-Logo"></Link>

            <div className="MobileNav-RightIcons">
              <Link
                to="/sign-in"
                className="MobileNav-RightIcon MobileNav-UserIcon"
              ></Link>
              <Link
                to="/user-cart"
                className="MobileNav-RightIcon MobileNav-CartIcon"
              ></Link>
            </div>
          </div>

          <div className={MobileSearchFieldClasses}>
            <div className="MobileNav-SearchDrawerWrap">
              <form
                onSubmit={this.handleSubmit}
                action="/"
                className="MobileNav-SearchForm"
              >
                <div className="MobileNav-SearchField">
                  <input
                    type="search"
                    name="Nav Search"
                    className="MobileNav-SearchFieldInput"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="MobileNav-SearchButton"
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
      </div>
    );
  }
}
