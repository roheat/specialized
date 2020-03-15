import React, { Component } from "react";
import "./bikes-products.styles.scss";
import BIKE_DATA from "../../data/bikes";
// import SectionTrail from '../Sections/Trail/Section-Trail';
// import SectionDownHill from '../Sections/DownHill/Section-DownHill';
// import SectionSWorks from '../Sections/S-Works/Section-SWorks';
import BikesPreview from "../bikes-preview/bikes-preview.component";

export default class BikesProducts extends Component {
  constructor() {
    super();

    this.state = {
      BikeData: BIKE_DATA
    };
  }
  render() {
    const { BikeData } = this.state;

    return (
      <div className="BikesProducts">
        <div className="BikesProductsWrap">
          {/* <SectionTrail />
                <SectionDownHill />
                <SectionSWorks /> */}
          {BikeData.map(({ id, ...otherBikesDataProps }) => (
            <BikesPreview key={id} {...otherBikesDataProps} />
          ))}
        </div>
      </div>
    );
  }
}
