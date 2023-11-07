import { createAction, props } from '@ngrx/store';

import { Filter } from '../index.model';

export const setFilter = createAction(
  `[Index] Set Filter`,
  props<{ filter: Filter }>()
);
