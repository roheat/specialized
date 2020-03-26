import { createSelector } from "reselect";

const selectBikes = state => state.bikes;

export const selectBikesData = createSelector(
  [selectBikes],
  bikes => bikes.bikesData
);

export const selectBikesCategoryData = categoryId =>
  createSelector([selectBikesData], bikesData => bikesData[categoryId]);

export const selectBikeDetails = (categoryId, bikeId) =>
  createSelector(
    [selectBikesData],
    bikesData => bikesData[categoryId] && bikesData[categoryId].items[bikeId]
  );
