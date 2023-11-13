import { createSelector } from '@ngrx/store';
import { getRouterSelectors } from '@ngrx/router-store';

import * as DataSelectors from '../../shared/data/store/data.selectors';

export const selectCountryData = createSelector(
  DataSelectors.selectState,
  getRouterSelectors().selectRouteParam(`name`),
  (data, name) => data.find((country) => country.name === name)
);
