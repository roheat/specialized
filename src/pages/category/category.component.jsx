import React from "react";
import { connect } from "react-redux";

import { selectBikesCategoryData } from "../../redux/bikes/bikes.selectors";
import CategoryMain from "../../components/category-main/category-main.component";

const CategoryPage = ({ categoryData }) => {
  return <CategoryMain categoryData={categoryData} />;
};

const mapStateToProps = (state, props) => ({
  categoryData: selectBikesCategoryData(props.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
