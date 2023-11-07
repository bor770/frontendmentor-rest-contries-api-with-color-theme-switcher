import { createAction, props } from '@ngrx/store';

import { CountriesData } from '../../shared/data/data.model';

export const fetch = createAction(`[Detail] Fetch`);

export const set = createAction(
  `[Detail] Set`,
  props<{ data: CountriesData }>()
);
