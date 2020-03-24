import { createSelector } from "reselect";

const selectBikes = state => state.bikes;

export const selectBikesData = createSelector(
  [selectBikes],
  bikes => bikes.bikesData
);

export const selectBikesCategoryData = categoryUrl =>
  createSelector([selectBikesData], bikesData => bikesData[categoryUrl]);
