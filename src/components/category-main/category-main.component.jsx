import React from "react";

import BikesMenu from "../bikes-menu/bikes-menu.component";
import BikesPreview from "../bikes-preview/bikes-preview.component";

import "./category-main.styles.scss";

const CategoryMain = ({ categoryData }) => (
  <div className="category-main-bikes">
    <div className="category-main-header">
      <div className="category-main-headerInner">
        <p className="category-main-headerTitle">
          SHOP / BIKES / {categoryData.title}
        </p>
      </div>
    </div>

    <div className="category-main-bikes-wrap">
      <div
        style={{
          background: `url(${categoryData.heroImageUrl})`,
          width: "100%",
          height: "55vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <p className="bikes-hero-title">{categoryData.title}</p>
      </div>
      <div className="bikes-content">
        <BikesMenu />
        <div className="bikes-products">
          <div className="bikes-products-wrap">
            <BikesPreview {...categoryData} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CategoryMain;
