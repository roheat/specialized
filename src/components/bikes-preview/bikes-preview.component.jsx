import React from "react";
import "./bikes-preview.styles.scss";
import BikesItem from "../bikes-item/bikes-item.component";

export default function BikesPreview() {
  return (
    <div className="Section-Trail">
      <p className="Section-Title">TRAIL</p>

      <div className="Section-CardWrap">
        <BikesItem />
      </div>
    </div>
  );
}
