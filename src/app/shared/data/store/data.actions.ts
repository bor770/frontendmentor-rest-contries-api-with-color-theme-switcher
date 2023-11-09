import { createAction, props } from '@ngrx/store';

import { CountriesData } from '../data.model';

export const fetchAdditional = createAction(`[Data] Fetch Additional`);

export const setAdditional = createAction(
  `[Data] Set Additional`,
  props<{ data: CountriesData }>()
);

export const setInitial = createAction(
  `[Data] Set Initial`,
  props<{ data: CountriesData }>()
);
