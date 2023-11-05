import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromIndex from './index.reducer';

const selectState = createFeatureSelector<fromIndex.State>(`index`);

const selectData = createSelector(selectState, (state) => state.data);

export const selectFilter = createSelector(
  selectState,
  (state) => state.filter
);

export const selectFilterRegion = createSelector(selectFilter, (filter) =>
  filter?.field === `region` ? filter.value : ``
);

export const selectFiltered = createSelector(
  selectData,
  selectFilter,
  (data, filter) =>
    data.filter((country) => {
      const value = filter?.value;

      switch (filter?.field) {
        case `name`:
          return country.name.toLowerCase().includes(value);
        case `region`:
          return country.region === value;
        default:
          return true;
      }
    })
);

export const selectRegions = createSelector(selectData, (data) =>
  Array.from(new Set(data.map((country) => country.region)).values()).sort()
);
