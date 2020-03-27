import React from "react";
import "./home-instagram.styles.scss";

export default function HomeInstagram() {
  return (
    <div className="home-instagram">
      <p className="home-instagram-title">FOLLOW US ON INSTAGRAM</p>

      <div className="home-instagram-infoWrap">
        <div className="home-instagram-infoImage"></div>
        <a
          href="https://www.instagram.com/iamspecialized_mtb/"
          target="_blank"
          className="home-instagram-info"
          rel="noopener noreferrer"
        >
          iamspecialized_mtb
        </a>
        <span className="verified"></span>
      </div>

      <div className="home-instagram-imagesWrap">
        <div className="home-instagram-imagesRow">
          <div className="home-instagram-image home-instagram-image1"></div>
          <div className="home-instagram-image home-instagram-image2"></div>
          <div className="home-instagram-image home-instagram-image3"></div>
        </div>
        <div className="home-instagram-imagesRow">
          <div className="home-instagram-image home-instagram-image4"></div>
          <div className="home-instagram-image home-instagram-image5"></div>
          <div className="home-instagram-image home-instagram-image6"></div>
        </div>
      </div>
    </div>
  );
}
