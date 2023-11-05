import { createAction, props } from '@ngrx/store';

import { CountriesData, Filter } from '../index.model';

export const setData = createAction(
  `[Index] Set`,
  props<{ data: CountriesData }>()
);

export const setFilter = createAction(
  `[Index] Set Filter`,
  props<{ filter: Filter }>()
);
