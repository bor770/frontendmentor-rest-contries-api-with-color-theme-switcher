import { createAction, props } from '@ngrx/store';

import { AllCountriesData } from '../index.model';

export const set = createAction(
  `[Index] Set`,
  props<{ data: AllCountriesData }>()
);
