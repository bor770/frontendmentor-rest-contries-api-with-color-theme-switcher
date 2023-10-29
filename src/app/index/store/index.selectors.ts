import { createFeatureSelector } from '@ngrx/store';

import * as fromIndex from './index.reducer';

export const selectState = createFeatureSelector<fromIndex.State>(`index`);
