import React from "react";
import "./bikes-item.styles.scss";
import { Link } from "react-router-dom";

export default function BikesItem({ item }) {
  return (
    <div className="bikes-item-container" key={item.id}>
      <Link
        to="/shop/trail/stumpjumper-pro-29"
        style={{
          width: "100%",
          height: "60%",
          background: `url(${item.imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="bikes-item-info">
        <Link to="/shop/trail/stumpjumper-pro-29" className="PreviewCard-Name">
          {item.name}
        </Link>

        <p className="bikes-item-price">${item.price}</p>
      </div>
    </div>
  );
}
