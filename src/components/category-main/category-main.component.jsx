import React from "react";

import BikesMenu from "../bikes-menu/bikes-menu.component";
import BikesPreview from "../bikes-preview/bikes-preview.component";

import "./category-main.styles.scss";

const CategoryMain = ({ categoryData }) => (
  <div className="ProductPageBikes">
    <div className="ProductPage-Header">
      <div className="ProductPage-HeaderInner">
        <p className="ProductPage-HeaderTitle">SHOP/BIKES</p>
      </div>
    </div>

    <div className="ProductPageBikes-Wrap">
      <div
        style={{
          background: `url(${categoryData.heroImageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "55vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <p className="BikesHero-Title">{categoryData.title}</p>
      </div>
      <div className="BikesContent">
        <BikesMenu />
        <div className="BikesProducts">
          <div className="BikesProductsWrap">
            <BikesPreview {...categoryData} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CategoryMain;
