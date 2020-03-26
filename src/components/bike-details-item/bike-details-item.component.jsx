import React from "react";
import "./bike-details-item.styles.scss";
import { Link } from "react-router-dom";

export default function BikeDetailsItem({
  bikeDetails: { id, name, price, partNumber }
}) {
  return (
    <div className="ItemCard-Demo8">
      <div className="ItemCardWrap">
        <div className="ItemCard-Column">
          <p className="ItemCard-Name">{name}</p>
          <div className="ItemCard-PricePart">
            <p className="ItemCard-Price">${price}</p>
          </div>
        </div>
        <div className="ItemCard-Column ItemCard-Column2">
          <p className="ItemCard-PartNumber">Part {partNumber}</p>
          <p className="ItemCard-Color">Red / Yellow / Black / Metallic Blue</p>
        </div>
        <div className="ItemCard-Column">
          <div className="ItemCard-ButtonWrap">
            <button className="ItemCard-Button BG-Red">ADD TO CART</button>
            <Link to="/retailers" className="ItemCard-Button">
              FIND NEAR BY
            </Link>
          </div>

          <p className="ItemCard-WishList">+ WISHLIST</p>
          <p className="ItemCard-Stock" style={{ color: "#009e2a" }}>
            IN STOCK
          </p>
        </div>
      </div>
    </div>
  );
}
