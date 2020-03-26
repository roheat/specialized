import React from "react";
import Slider from "react-slick";
import "./bike-details-slider.styles.scss";

import SliderImage1 from "../../assets/images/slider/Demo8-1.jpg";
import SliderImage2 from "../../assets/images/slider/Demo8-2.jpg";
import SliderImage3 from "../../assets/images/slider/Demo8-3.jpg";
import SliderImage4 from "../../assets/images/slider/Demo8-4.jpg";
import SliderImage5 from "../../assets/images/slider/Demo8-5.jpg";

export default function BikeDetailsSlider({ bikeDetails }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false
  };
  return (
    <div className="slider-wrapper" style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        <div>
          <div
            className="slider-image"
            style={{
              background: `url(${bikeDetails.imageUrl})`,
              height: "45vh"
            }}
          />
        </div>
        <div>
          <div
            className="slider-image"
            style={{
              background: `url(${SliderImage1})`,
              height: "45vh"
            }}
          />
        </div>
        <div>
          <div
            className="slider-image"
            style={{
              background: `url(${SliderImage2})`,
              height: "45vh"
            }}
          />
        </div>
        <div>
          <div
            className="slider-image"
            style={{
              background: `url(${SliderImage3})`,
              height: "45vh"
            }}
          />
        </div>
        <div>
          <div
            className="slider-image"
            style={{
              background: `url(${SliderImage4})`,
              height: "45vh"
            }}
          />
        </div>
        <div>
          <div
            className="slider-image"
            style={{
              background: `url(${SliderImage5})`,
              height: "45vh"
            }}
          />
        </div>
      </Slider>
    </div>
  );
}
