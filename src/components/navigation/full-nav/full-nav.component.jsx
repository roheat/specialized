import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { auth } from "../../../firebase/firebase.utils";

import "./full-nav.styles.scss";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { selectCartHidden } from "../../../redux/cart/cart.selectors";

class FullNav extends React.Component {
  constructor() {
    super();
    this.state = { isSearchOpen: false };
  }

  toggleSearch = () => {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  };

  closeSearch = () => {
    this.setState({ isSearchOpen: false });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    let SearchFieldClasses = "full-nav-searchDrawer";
    if (this.state.isSearchOpen) {
      SearchFieldClasses = "full-nav-searchDrawer ActiveSearch";
    }

    const { currentUser, hidden } = this.props;
    return (
      <div className="full-nav">
        <div className="full-navWrap">
          <div className="full-nav-topRow">
            <div className="full-nav-rowWrap full-nav-rowWrap-top">
              <p className="full-nav-shippingOffer">
                FREE SHIPPING ON ALL ORDERS OVER $150.
              </p>
              <div className="full-nav-topUserToolsWrap">
                <a
                  href="https://www.specialized.com/de/en/store-finder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="full-nav-retailerLink"
                >
                  <div className="full-nav-retailerIcon"></div>
                  <p className="full-nav-retailerText">FIND A RETAILER</p>
                </a>

                <div className="full-nav-englishWrap">
                  <div className="full-nav-flagIcon"></div>
                  <p className="full-nav-englishText">EN</p>
                </div>
                {currentUser ? (
                  <div
                    className="full-nav-signOutButton"
                    onClick={() => auth.signOut()}
                  >
                    SIGN OUT
                  </div>
                ) : (
                  <Link to="/sign-in" className="full-nav-signInButton">
                    SIGN IN
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="full-nav-bottomRow">
            <div className="full-nav-rowWrap full-nav-rowWrap-bottom">
              <Link to="/" className="full-nav-logo"></Link>

              <div className="full-nav-linkWrapper">
                <ul className="full-nav-linkList">
                  <li className="full-nav-linkItem">
                    <Link to="/shop" className="full-nav-link">
                      BIKES
                    </Link>
                  </li>
                  <li className="full-nav-linkItem">
                    <Link to="/shop/trail" className="full-nav-link">
                      TRAIL
                    </Link>
                  </li>
                  <li className="full-nav-linkItem">
                    <Link to="/shop/downhill" className="full-nav-link">
                      DOWNHILL
                    </Link>
                  </li>
                  <li className="full-nav-linkItem">
                    <Link to="/shop/s-works" className="full-nav-link">
                      S-WORKS
                    </Link>
                  </li>
                  <li className="full-nav-linkItem">
                    <Link to="/inside-specialized" className="full-nav-link">
                      INSIDE SPECIALIZED
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="full-nav-bottomUserToolsWrap">
                <div
                  className="full-nav-search full-nav-icon"
                  onClick={this.toggleSearch}
                ></div>
                <CartIcon />
              </div>
            </div>
          </div>

          <div className={SearchFieldClasses}>
            <div className="full-nav-searchDrawerWrap">
              <form
                onSubmit={this.handleSubmit}
                action="/"
                className="full-nav-searchForm"
              >
                <div className="full-nav-searchField">
                  <input
                    type="search"
                    name="Nav Search"
                    className="full-nav-searchFieldInput"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="full-nav-searchButton"
                  onClick={this.closeSearch}
                >
                  SEARCH
                </button>
              </form>
            </div>
          </div>
        </div>
        {!hidden && <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(FullNav);
