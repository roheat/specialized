import React from "react";
import "./nav-drawer.styles.scss";
import { Link } from "react-router-dom";

export default function NavDrawer({ closeDrawer, drawerStatus }) {
  let navDrawerClasses = "nav-drawer";
  if (drawerStatus) {
    navDrawerClasses = "nav-drawer active-nav-drawer";
  }

  return (
    <div className={navDrawerClasses}>
      <div className="nav-drawer-wrap">
        <div className="nav-drawer-categories">
          <div className="nav-drawer-exit" onClick={closeDrawer}>
            <div className="nav-drawer-bar nav-drawer-bar1"></div>
            <div className="nav-drawer-bar nav-drawer-bar2"></div>
          </div>

          <div className="nav-drawer-tabs">
            <div className="nav-drawer-shop">
              <p className="nav-drawer-shopText">SHOP</p>
            </div>
            <div className="nav-drawer-insideSpecialized" onClick={closeDrawer}>
              <Link
                to="/inside-specialized"
                className="nav-drawer-insideSpecializedText"
              >
                INSIDE SPECIALIZED
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-drawer-menu">
          <ul className="nav-drawer-menuList">
            <li className="nav-drawer-menuItem">
              <Link
                to="/shop"
                className="nav-drawer-menuLink"
                onClick={closeDrawer}
              >
                BIKES
              </Link>
            </li>
            <li className="nav-drawer-menuItem">
              <Link
                to="/shop/trail"
                className="nav-drawer-menuLink"
                onClick={closeDrawer}
              >
                TRAIL
              </Link>
            </li>
            <li className="nav-drawer-menuItem">
              <Link
                to="/shop/downhill"
                className="nav-drawer-menuLink"
                onClick={closeDrawer}
              >
                DOWNHILL
              </Link>
            </li>
            <li className="nav-drawer-menuItem">
              <Link
                to="/shop/s-works"
                className="nav-drawer-menuLink"
                onClick={closeDrawer}
              >
                S-WORKS
              </Link>
            </li>
            <li className="nav-drawer-menuItem">
              <a
                href="https://www.specialized.com/de/en/store-finder"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-drawer-menuLink"
                onClick={closeDrawer}
              >
                FIND A RETAILER
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="nav-drawer-Footer">Made For Riders, By Riders</p>
    </div>
  );
}
