import { createSelector } from "reselect";

const selectBikes = state => state.bikes;

export const selectBikesData = createSelector(
  [selectBikes],
  bikes => bikes.bikesData
);
