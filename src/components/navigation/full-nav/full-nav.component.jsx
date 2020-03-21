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
    let SearchFieldClasses = "FullNav-SearchDrawer";
    if (this.state.isSearchOpen) {
      SearchFieldClasses = "FullNav-SearchDrawer ActiveSearch";
    }

    const { currentUser, hidden } = this.props;
    return (
      <div className="FullNav">
        <div className="FullNavWrap">
          <div className="FullNav-TopRow">
            <div className="FullNav-RowWrap FullNav-RowWrap-Top">
              <p className="FullNav-ShippingOffer">
                FREE SHIPPING ON ALL ORDERS OVER $150.
              </p>
              <div className="FullNav-TopUserToolsWrap">
                <Link to="/retailers" className="FullNav-RetailerLink">
                  <div className="FullNav-RetailerIcon"></div>
                  <p className="FullNav-RetailerText">FIND A RETAILER</p>
                </Link>

                <div className="FullNav-EnglishWrap">
                  <div className="FullNav-FlagIcon"></div>
                  <p className="FullNav-EnglishText">EN</p>
                </div>
                {currentUser ? (
                  <div
                    className="FullNav-SignOutButton"
                    onClick={() => auth.signOut()}
                  >
                    SIGN OUT
                  </div>
                ) : (
                  <Link to="/sign-in" className="FullNav-SignInButton">
                    SIGN IN
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="FullNav-BottomRow">
            <div className="FullNav-RowWrap FullNav-RowWrap-Bottom">
              <Link to="/" className="FullNav-Logo"></Link>

              <div className="FullNav-LinkWrapper">
                <ul className="FullNav-LinkList">
                  <li className="FullNav-LinkItem">
                    <Link to="/shop/bikes" className="FullNav-Link">
                      BIKES
                    </Link>
                  </li>
                  <li className="FullNav-LinkItem">
                    <Link to="/shop/trail" className="FullNav-Link">
                      TRAIL
                    </Link>
                  </li>
                  <li className="FullNav-LinkItem">
                    <Link to="/shop/downhill" className="FullNav-Link">
                      DOWNHILL
                    </Link>
                  </li>
                  <li className="FullNav-LinkItem">
                    <Link to="/shop/s-works" className="FullNav-Link">
                      S-WORKS
                    </Link>
                  </li>
                  <li className="FullNav-LinkItem">
                    <Link to="/inside-specialized" className="FullNav-Link">
                      INSIDE SPECIALIZED
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="FullNav-BottomUserToolsWrap">
                <div
                  className="FullNav-Search FullNav-Icon"
                  onClick={this.toggleSearch}
                ></div>
                <CartIcon />
              </div>
            </div>
          </div>

          <div className={SearchFieldClasses}>
            <div className="FullNav-SearchDrawerWrap">
              <form
                onSubmit={this.handleSubmit}
                action="/"
                className="FullNav-SearchForm"
              >
                <div className="FullNav-SearchField">
                  <input
                    type="search"
                    name="Nav Search"
                    className="FullNav-SearchFieldInput"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="FullNav-SearchButton"
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
