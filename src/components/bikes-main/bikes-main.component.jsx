import React from "react";

import BikesMenu from "../bikes-menu/bikes-menu.component";
import BikesProducts from "../bikes-products/bikes-products.component";
import "./bikes-main.styles.scss";

const BikesMain = () => (
  <div className="ProductPageBikes">
    <div className="ProductPage-Header">
      <div className="ProductPage-HeaderInner">
        <p className="ProductPage-HeaderTitle">SHOP/BIKES</p>
      </div>
    </div>

    <div className="ProductPageBikes-Wrap">
      {/* <BikesHero /> */}
      <div className="BikesHero">
        <p className="BikesHero-Title">BIKES</p>
      </div>
      {/* <BikesContent /> */}
      <div className="BikesContent">
        <BikesMenu />
        <BikesProducts />
      </div>
    </div>
  </div>
);

export default BikesMain;
