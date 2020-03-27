import React from "react";
import "./inside-specialized.styles.scss";

export default function InsideSpecialized() {
  return (
    <div className="inside-specialized">
      <div className="inside-wrap">
        <div className="inside-family">
          <div className="inside-family-content">
            <p className="inside-family-title">1974</p>
            <p className="inside-family-text">
              We are riders—that fact has guided our every decision since 1974.
              When quality tires weren't around, we strove to make the best.
              When people wanted to ride cruisers in the dirt, we made the first
              production mountain bike. When roadies wanted to go faster, we
              doubled-down on carbon and built our own wind tunnel. And when we
              saw kids struggling to focus in school, we started the Specialized
              Foundation to help them through cycling.
            </p>
            <p className="inside-family-Text">
              Specialized. Made for riders, by riders.
            </p>
          </div>
        </div>

        <div className="inside-grey1">
          <p className="inside-grey1-text">
            SINCE THERE’VE BEEN MOUNTAIN BIKES, THERE’VE BEEN STUMPJUMPERS
          </p>
        </div>
        <div className="inside-poster2"></div>

        <div className="inside-grey2">
          <p className="inside-grey2-text">WE BELIEVE CYCLING CHANGES LIVES</p>
        </div>

        <div className="inside-video">
          <iframe
            title="specialized promo"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5emg5HORbaY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="inside-career">
          <div className="inside-career-content">
            <p className="inside-career-title">WHY WORK HERE</p>
            <p className="inside-career-text">
              If there’s one thing that unites the people who work here, it’s
              this: We believe that bicycles have the power to change lives.
              That’s why we’re always looking for passionate people from all
              disciplines who share in this belief and who are looking to play
              an active role in inspiring and getting more people on bikes. Are
              you ready to make a difference?
            </p>
            <div className="inside-career-button">SEARCH JOB OPENINGS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
