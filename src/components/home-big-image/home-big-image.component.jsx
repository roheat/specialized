import React from "react";
import "./home-big-image.styles.scss";

export default function LandingBigImage() {
  return (
    <div className="LandingBigImage">
      <div className="LandingBigImage-TitleWrap">
        <p className="LandingBigImage-Title">IT'S YOU,</p>
        <p className="LandingBigImage-Title2">ONLY FASTER</p>
      </div>

      <div className="LandingBigImage-TextWrap">
        <p className="LandingBigImage-Text">
          Duis aute irure dolor in reprehenderit
        </p>
        <p className="LandingBigImage-Text">
          in voluptate velit esse cillum dolore eu
        </p>
        <p className="LandingBigImage-Text Bolder">fugiat nulla pariatur.</p>
      </div>
    </div>
  );
}
