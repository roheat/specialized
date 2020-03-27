import React from "react";
import { connect } from "react-redux";

import { addCartItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./bike-details-item.styles.scss";

function BikeDetailsItem({ bikeDetails, addCartItem }) {
  const { name, price, partNumber } = bikeDetails;
  return (
    <div className="bike-details-item">
      <div className="bike-details-item-wrap">
        <div className="bike-details-item-column">
          <p className="bike-details-item-name">{name}</p>
          <div className="bike-details-item-price-part">
            <p className="bike-details-item-price">${price}</p>
          </div>
        </div>
        <div className="bike-details-item-column bike-details-item-column2">
          <p className="bike-details-item-partNumber">Part {partNumber}</p>
          <p className="bike-details-item-color">
            Red / Yellow / Black / Metallic Blue
          </p>
        </div>
        <div className="bike-details-item-column">
          <div className="bike-details-item-buttonWrap">
            <CustomButton red onClick={() => addCartItem(bikeDetails)}>
              Add to cart
            </CustomButton>
            <a
              href="https://www.specialized.com/de/en/store-finder"
              target="_blank"
              rel="noopener noreferrer"
              className="bike-details-item-button"
            >
              FIND NEAR BY
            </a>
          </div>

          <p className="bike-details-item-wishList">+ WISHLIST</p>
          <p className="bike-details-item-stock" style={{ color: "#009e2a" }}>
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
