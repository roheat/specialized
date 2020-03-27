import React from "react";
import "./nav-drawer.styles.scss";
import { Link } from "react-router-dom";

export default function NavDrawer({ closeDrawer, drawerStatus }) {
  let NavDrawerClasses = "NavDrawer";
  if (drawerStatus) {
    NavDrawerClasses = "NavDrawer ActiveNavDrawer";
  }

  return (
    <div className={NavDrawerClasses}>
      <div className="NavDrawerWrap">
        <div className="NavDrawer-Categories">
          <div className="NavDrawer-Exit" onClick={closeDrawer}>
            <div className="NavDrawer-Bar NavDrawer-Bar1"></div>
            <div className="NavDrawer-Bar NavDrawer-Bar2"></div>
          </div>

          <div className="NavDrawerTabs">
            <div className="NavDrawer-Shop">
              <p className="NavDrawer-ShopText">SHOP</p>
            </div>
            <div className="NavDrawer-InsideSpecialized" onClick={closeDrawer}>
              <Link
                to="/inside-specialized"
                className="NavDrawer-InsideSpecializedText"
              >
                INSIDE SPECIALIZED
              </Link>
            </div>
          </div>
        </div>

        <div className="NavDrawer-Menu">
          <ul className="NavDrawer-MenuList">
            <li className="NavDrawer-MenuItem">
              <Link
                to="/shop"
                className="NavDrawer-MenuLink"
                onClick={closeDrawer}
              >
                BIKES
              </Link>
            </li>
            <li className="NavDrawer-MenuItem">
              <Link
                to="/shop/trail"
                className="NavDrawer-MenuLink"
                onClick={closeDrawer}
              >
                TRAIL
              </Link>
            </li>
            <li className="NavDrawer-MenuItem">
              <Link
                to="/shop/downhill"
                className="NavDrawer-MenuLink"
                onClick={closeDrawer}
              >
                DOWNHILL
              </Link>
            </li>
            <li className="NavDrawer-MenuItem">
              <Link
                to="/shop/s-works"
                className="NavDrawer-MenuLink"
                onClick={closeDrawer}
              >
                S-WORKS
              </Link>
            </li>
            <li className="NavDrawer-MenuItem">
              <a
                href="https://www.specialized.com/de/en/store-finder"
                target="_blank"
                rel="noopener noreferrer"
                className="NavDrawer-MenuLink"
                onClick={closeDrawer}
              >
                FIND A RETAILER
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="NavDrawer-Footer">Made For Riders, By Riders</p>
    </div>
  );
}
