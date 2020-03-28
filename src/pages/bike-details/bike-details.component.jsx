import React from "react";
import { connect } from "react-redux";

import { selectBikeDetails } from "../../redux/bikes/bikes.selectors";
import BikeDetailsSlider from "../../components/bike-details-slider/bike-details-slider.component";
import BikeDetailsItem from "../../components/bike-details-item/bike-details-item.component";
import BikeDetailsSpec from "../../components/bike-details-spec/bike-details-spec.component";
import BikeDetailsInfo from "../../components/bike-details-info/bike-details-info.component";
import NotFoundPage from "../404/404.component";

import "./bike-details.styles.scss";

const BikeDetailsPage = ({ bikeDetails }) => {
  if (!bikeDetails) return <NotFoundPage />;
  return (
    <div className="bike-details">
      <div className="bike-details-wrap">
        <BikeDetailsSlider bikeDetails={bikeDetails} />
        <BikeDetailsItem bikeDetails={bikeDetails} />
        <BikeDetailsInfo />
        <BikeDetailsSpec />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { categoryId, bikeId } = props.match.params;
  return {
    bikeDetails: selectBikeDetails(categoryId, bikeId)(state)
  };
};

export default connect(mapStateToProps)(BikeDetailsPage);
