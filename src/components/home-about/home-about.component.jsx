import React from "react";
import "./home-about.styles.scss";
import { Link } from "react-router-dom";

export default function HomeAbout() {
  return (
    <div className="home-about">
      <p className="home-about-title">SPECIALIZED MTB</p>
      <p className="home-about-text">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <div className="home-about-button">
        <Link to="/inside-specialized" className="home-about-buttonLink">
          OUR STORY
        </Link>
      </div>
    </div>
  );
}
