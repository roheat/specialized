import React from "react";
import "./home-categories.styles.scss";
import { Link } from "react-router-dom";

export default function HomeCategories() {
  return (
    <div className="home-categories">
      <p className="home-categories-title">EXPLORE OUR BIKES</p>

      <div className="home-categories-windowWrap">
        <Link
          to="/shop/trail"
          className="home-categories-window home-categories-window1"
        >
          <div className="home-categories-innerWindow"></div>
          <p className="home-categories-windowText">TRAIL</p>
        </Link>
        <Link
          to="/shop/downhill"
          className="home-categories-window home-categories-window2"
        >
          <div className="home-categories-innerWindow"></div>
          <p className="home-categories-windowText">DOWNHILL</p>
        </Link>
        <Link
          to="shop/s-works"
          className="home-categories-window home-categories-window3"
        >
          <div className="home-categories-innerWindow"></div>
          <p className="home-categories-windowText">S-WORKS</p>
        </Link>
      </div>
    </div>
  );
}
