import React from "react";
import NotFoundPNG from "../../assets/images/404/not-found.png";

import "./404.styles.scss";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found-wrap">
        <div className="not-found-content">
          <h1>404</h1>
          <h3>Oops! Looks like you are lost!</h3>
          <Link to="/shop">Continue Shopping</Link>
          <img src={NotFoundPNG} width="800" alt="404" />
        </div>
      </div>
    </div>
  );
}
