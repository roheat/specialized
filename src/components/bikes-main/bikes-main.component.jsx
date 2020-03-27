import React from "react";

import BikesMenu from "../bikes-menu/bikes-menu.component";
import BikesProducts from "../bikes-products/bikes-products.component";
import "./bikes-main.styles.scss";

const BikesMain = () => (
  <div className="bikes-main">
    <div className="bikes-main-header">
      <div className="bikes-main-headerInner">
        <p className="bikes-main-headerTitle">SHOP/BIKES</p>
      </div>
    </div>

    <div className="bikes-main-wrap">
      <div className="bikes-hero">
        <p className="bikes-hero-title">BIKES</p>
      </div>
      <div className="bikes-content">
        <BikesMenu />
        <BikesProducts />
      </div>
    </div>
  </div>
);

export default BikesMain;
