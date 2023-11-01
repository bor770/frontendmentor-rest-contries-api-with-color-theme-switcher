import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromIndex from './index.reducer';

const selectState = createFeatureSelector<fromIndex.State>(`index`);

export const selectData = createSelector(selectState, (state) => state.data);

export const selectRegions = createSelector(selectData, (data) =>
  Array.from(new Set(data.map((country) => country.region)).values()).sort()
);
