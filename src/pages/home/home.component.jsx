import React from "react";
import "./home.styles.scss";

import HomeHero from "../../components/home-hero/home-hero.component";
import HomeAbout from "../../components/home-about/home-about.component";
import HomeBigImage from "../../components/home-big-image/home-big-image.component";
import HomeCategories from "../../components/home-categories/home-categories.component";
import HomeInstagram from "../../components/home-instagram/home-instagram.component";

export default function HomePage() {
  return (
    <div className="Landing">
      <HomeHero />
      <HomeAbout />
      <HomeCategories />
      <HomeBigImage />
      <HomeInstagram />
    </div>
  );
}
