import React from "react";
import "./home-hero.styles.scss";
import { Link } from "react-router-dom";

export default function LandingHero() {
  return (
    <div className="home-hero">
      <div className="home-hero-content">
        <div className="home-hero-titleWrap">
          <p className="home-hero-title">WE HAVE</p>
          <p className="home-hero-title">THE WORKS</p>
        </div>

        <p className="home-hero-text">
          ITS ALL FUN AND GAMES UNTIL YOU CATCH TOO MUCH AIR
        </p>

        <Link to="/shop/trail/fuse-expert-29" className="home-hero-button">
          Fuse Expert 29
        </Link>
      </div>

      <Link to="/shop/s-works" className="home-hero-bottomHookWrap">
        <p className="home-hero-bottomHook">TAKE A DEEPER LOOK AT THE</p>
        <p className="home-hero-bottomHook bolder">2019 S-WORKS LINE UP</p>
      </Link>
    </div>
  );
}
