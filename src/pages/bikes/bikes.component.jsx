import React from "react";
import { Route } from "react-router-dom";

import BikesMain from "../../components/bikes-main/bikes-main.component";

import CategoryPage from "../category/category.component";
import BikeDetailsPage from "../bike-details/bike-details.component";

const BikesPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={BikesMain} />
    <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
    <Route
      path={`${match.path}/:categoryId/:bikeId`}
      component={BikeDetailsPage}
    />
  </div>
);

export default BikesPage;
