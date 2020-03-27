import React from "react";
import "./inside-specialized.styles.scss";
// import InsideFamily from './1.Family/Inside-Family';
// import FamilyMobile from './2.Family-Mobile/Family-Mobile';
// import InsidePoster1 from './3.Poster-1/Inside-Poster1';
// import InsideGrey1 from './4.GreySection1/Inside-Grey1';
// import InsidePoster2 from './5.Poster-2/Inside-Poster2';
// import InsidePoster3 from './6.Poster3/Inside-Poster3';
// import InsideGrey2 from './8.GreySection2/Inside-Grey2';
// import InsidePoster3Mobile from './7.Poster3-Mobile/Inside-Poster3-Mobile';
// import InsideVideo from './9.Video/Inside-Video';
// import InsideCareer from './10.Career/Inside-Career';

export default function InsideSpecialized() {
  return (
    <div className="InsideSpecialized">
      <div className="InsideWrap">
        <div className="Inside-Family">
          <div className="Inside-FamilyContent">
            <p className="Inside-Family-Title">1974</p>
            <p className="Inside-Family-Text">
              We are riders—that fact has guided our every decision since 1974.
              When quality tires weren't around, we strove to make the best.
              When people wanted to ride cruisers in the dirt, we made the first
              production mountain bike. When roadies wanted to go faster, we
              doubled-down on carbon and built our own wind tunnel. And when we
              saw kids struggling to focus in school, we started the Specialized
              Foundation to help them through cycling.
            </p>
            <p className="Inside-Family-Text">
              Specialized. Made for riders, by riders.
            </p>
          </div>
        </div>

        <div className="Inside-Grey1">
          <p className="Inside-Grey1-Text">
            SINCE THERE’VE BEEN MOUNTAIN BIKES, THERE’VE BEEN STUMPJUMPERS
          </p>
        </div>
        <div className="Inside-Poster2"></div>

        <div className="Inside-Grey2">
          <p className="Inside-Grey2-Text">WE BELIEVE CYCLING CHANGES LIVES</p>
        </div>

        <div className="Inside-Video">
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

        <div className="Inside-Career">
          <div className="Inside-Career-Content">
            <p className="Inside-Career-Title">WHY WORK HERE</p>
            <p className="Inside-Career-Text">
              If there’s one thing that unites the people who work here, it’s
              this: We believe that bicycles have the power to change lives.
              That’s why we’re always looking for passionate people from all
              disciplines who share in this belief and who are looking to play
              an active role in inspiring and getting more people on bikes. Are
              you ready to make a difference?
            </p>
            <div className="Inside-Career-Button">SEARCH JOB OPENINGS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
