import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromData from './data.reducer';

export const selectState = createFeatureSelector<fromData.State>(`data`);

export const selectRegions = createSelector(selectState, (data) =>
  Array.from(new Set(data.map((country) => country.region)).values()).sort()
);
