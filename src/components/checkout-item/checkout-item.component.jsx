import React from "react";
import { connect } from "react-redux";

import {
  clearCartItem,
  addCartItem,
  removeCartItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  clearCartItem,
  addCartItem,
  removeCartItem
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
  removeCartItem: item => dispatch(removeCartItem(item)),
  clearCartItem: item => dispatch(clearCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
