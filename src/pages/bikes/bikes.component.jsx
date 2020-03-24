import React from "react";
import { Route } from "react-router-dom";

import BikesMain from "../../components/bikes-main/bikes-main.component";

import "./bikes.styles.scss";
import CategoryPage from "../category/category.component";

const BikesPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={BikesMain} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default BikesPage;
