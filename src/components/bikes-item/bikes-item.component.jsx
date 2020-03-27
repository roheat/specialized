import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addCartItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./bikes-item.styles.scss";

function BikesItem({ item, routeName, addCartItem }) {
  const { prettyId, imageUrl, name, price } = item;
  return (
    <div className="bikes-item-container">
      <Link
        to={`/${routeName}/${prettyId}`}
        style={{
          width: "100%",
          height: "60%",
          background: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="bikes-item-info">
        <Link to={`/${routeName}/${prettyId}`} className="bike-item-name">
          {name}
        </Link>

        <p className="bikes-item-price">${price}</p>
        <CustomButton inverted onClick={() => addCartItem(item)}>
          Add to cart
        </CustomButton>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(BikesItem);
