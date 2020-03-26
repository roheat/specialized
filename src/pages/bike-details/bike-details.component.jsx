import React from "react";
import { connect } from "react-redux";

import { selectBikeDetails } from "../../redux/bikes/bikes.selectors";
import BikeDetailsSlider from "../../components/bike-details-slider/bike-details-slider.component";
import BikeDetailsItem from "../../components/bike-details-item/bike-details-item.component";
import BikeDetailsSpec from "../../components/bike-details-spec/bike-details-spec.component";
import "./bike-details.styles.scss";
import BikeDetailsInfo from "../../components/bike-details-info/bike-details-info.component";

const BikeDetailsPage = ({ bikeDetails }) => (
  <div className="ItemPage-Demo8">
    <div className="ProductPage-Header">
      <div className="ProductPage-HeaderInner">
        <p className="ProductPage-HeaderTitle">SHOP / S-WORKS / DEMO 8</p>
      </div>
    </div>

    <div className="Demo8Wrap">
      <BikeDetailsSlider bikeDetails={bikeDetails} />
      <BikeDetailsItem bikeDetails={bikeDetails} />
      <BikeDetailsInfo />
      <BikeDetailsSpec />
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  const { categoryId, bikeId } = props.match.params;
  return {
    bikeDetails: selectBikeDetails(categoryId, bikeId)(state)
  };
};

export default connect(mapStateToProps)(BikeDetailsPage);
