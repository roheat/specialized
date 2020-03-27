import React from "react";
import "./bikes-preview.styles.scss";
import BikesItem from "../bikes-item/bikes-item.component";

export default function BikesPreview({ id, title, routeName, items }) {
  return (
    <div key={id} className="section">
      <a href={routeName}>
        <p className="section-title">{title.toUpperCase()}</p>
      </a>

      <div className="section-cardWrap">
        {Object.values(items).map(item => (
          <BikesItem key={item.id} item={item} routeName={routeName} />
        ))}
      </div>
    </div>
  );
}
