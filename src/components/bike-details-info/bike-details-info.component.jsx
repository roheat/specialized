import React from "react";
import "./bike-details-info.styles.scss";

export default function BikeDetailsInfo() {
  return (
    <div className="bike-details-info">
      <div className="bike-details-info-wrap">
        <p className="bike-details-info-text para-1">
          "Berms, jumps, ruts—hawt laps." By now, you've probably seen the new
          Demo Racer 29 video—it's a must if you haven't. Not only is it
          shred-inspiring, but it clearly shows what the Demo Racer 29 Pro 29 is
          all about—being the ultimate trail bike.
        </p>

        <ul className="bike-details-info-list">
          <li className="bike-details-info-text bike-details-info-list-item">
            The Demo Racer 29's asymmetrical, FACT 11m carbon fiber construction
            is lightweight, stiff, and ready to take on the trail. It's built
            off our 29 Trail Geometry, so it's just the right amount of both
            capable and comfortable. And with SWAT™ integration in the down
            tube, a threaded BB, easy cable routing, and an all new chain
            silencer, it's ready for anything the trail, or you, throw at it.
          </li>
          <li className="bike-details-info-text bike-details-info-list-item">
            FOX FLOAT DPX2 Factory has three modes—Open, Trail, and Firm—that
            control large compression adjustments on-the-fly. There's also a
            tool adjust compression adjustment that allows for fine-tuning of
            the compression in Open mode.
          </li>
          <li className="bike-details-info-text bike-details-info-list-item">
            The legendary GRIP 2 damper, large stanchions, buttery-smooth
            Kashima coating—the FOX 36 Factory 150mm fork is one of the best out
            there.
          </li>
        </ul>
      </div>
    </div>
  );
}
