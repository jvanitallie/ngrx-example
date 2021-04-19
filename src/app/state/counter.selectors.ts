import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCounter from "./counter.reducer";

const selectCounterState = createFeatureSelector<fromCounter.CounterState>(
  fromCounter.featureKey
);

export const selectCounterValue = createSelector(
  selectCounterState,
  state => state.count
);
