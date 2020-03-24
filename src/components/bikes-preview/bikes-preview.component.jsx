import React from "react";
import "./bikes-preview.styles.scss";
import BikesItem from "../bikes-item/bikes-item.component";

export default function BikesPreview({ id, title, routeName, items }) {
  return (
    <div key={id} className="Section">
      <a href={routeName}>
        <p className="Section-Title">{title.toUpperCase()}</p>
      </a>

      <div className="Section-CardWrap">
        {Object.values(items).map(item => (
          <BikesItem key={item.id} item={item} routeName={routeName} />
        ))}
      </div>
    </div>
  );
}
