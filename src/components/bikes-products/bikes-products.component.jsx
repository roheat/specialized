import React, { Component } from "react";
import "./bikes-products.styles.scss";
// import BIKE_DATA from '../../../DataFiles/BikeData';
// import SectionTrail from '../Sections/Trail/Section-Trail';
// import SectionDownHill from '../Sections/DownHill/Section-DownHill';
// import SectionSWorks from '../Sections/S-Works/Section-SWorks';

export default class BikesProducts extends Component {
  constructor() {
    super();

    this.state = {
      // BikeData: BIKE_DATA
    };
  }
  render() {
    // const {BikeData} = this.state;

    return (
      <div className="BikesProducts">
        <div className="BikesProductsWrap">
          HI
          {/* <SectionTrail />
                <SectionDownHill />
                <SectionSWorks /> */}
          {/* {
                BikeData.map(({ id, ...otherBikesDataProps }) =>(
                    <BikesSection key={id} {...otherBikesDataProps} />
                ))
                } */}
        </div>
      </div>
    );
  }
}
