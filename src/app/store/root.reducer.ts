import { ActionReducerMap } from '@ngrx/store';

import * as fromData from '../shared/data/store/data.reducer';
import * as fromIndex from '../index/store/index.reducer';
import * as fromLayout from '../shared/layout/store/layout.reducer';
import * as fromScheme from '../shared/scheme/store/scheme.reducer';

export interface RootState {
  data: fromData.State;
  index: fromIndex.State;
  layout: fromLayout.State;
  scheme: fromScheme.State;
}

export const rootReducer: ActionReducerMap<RootState> = {
  data: fromData.reducer,
  index: fromIndex.reducer,
  layout: fromLayout.reducer,
  scheme: fromScheme.reducer,
};
