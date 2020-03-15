import React from "react";
import "./bikes-content.styles.scss";
// import BikesMenu from '../bikes-menu/bikes-menu.component';
import BikesMenu from "../bikes-menu/bikes-menu.component";
import BikesProducts from "../bikes-products/bikes-products.component";

export default function BikesContent() {
  return (
    <div className="BikesContent">
      <BikesMenu />
      <BikesProducts />
    </div>
  );
}
