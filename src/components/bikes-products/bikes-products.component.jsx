import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BikesPreview from "../bikes-preview/bikes-preview.component";
import { selectBikesData } from "../../redux/bikes/bikes.selectors";

import "./bikes-products.styles.scss";

const BikesProducts = ({ bikesData }) => (
  <div className="BikesProducts">
    <div className="BikesProductsWrap">
      {bikesData.map(({ id, ...otherBikesDataProps }) => (
        <BikesPreview key={id} {...otherBikesDataProps} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  bikesData: selectBikesData
});

export default connect(mapStateToProps)(BikesProducts);
