import React from "react";
import "./home-big-image.styles.scss";

export default function HomeBigImage() {
  return (
    <div className="home-big-image">
      <div className="home-big-image-titleWrap">
        <p className="home-big-image-title">IT'S YOU,</p>
        <p className="home-big-image-title2">ONLY FASTER</p>
      </div>

      <div className="home-big-image-textWrap">
        <p className="home-big-image-text">
          Duis aute irure dolor in reprehenderit
        </p>
        <p className="home-big-image-text">
          in voluptate velit esse cillum dolore eu
        </p>
        <p className="home-big-image-text bolder">fugiat nulla pariatur.</p>
      </div>
    </div>
  );
}
