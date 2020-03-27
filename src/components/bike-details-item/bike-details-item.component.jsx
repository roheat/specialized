import React from "react";
import { connect } from "react-redux";

import { addCartItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./bike-details-item.styles.scss";

function BikeDetailsItem({ bikeDetails, addCartItem }) {
  const { name, price, partNumber } = bikeDetails;
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
            <CustomButton red onClick={() => addCartItem(bikeDetails)}>
              Add to cart
            </CustomButton>
            <a
              href="https://www.specialized.com/de/en/store-finder"
              target="_blank"
              rel="noopener noreferrer"
              className="ItemCard-Button"
            >
              FIND NEAR BY
            </a>
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

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(BikeDetailsItem);
