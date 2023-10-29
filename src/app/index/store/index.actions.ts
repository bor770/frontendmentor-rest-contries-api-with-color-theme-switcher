import { createAction, props } from '@ngrx/store';

import * as fromIndex from './index.reducer';

export const set = createAction(
  `[Index] Set`,
  props<{ data: fromIndex.State }>()
);
