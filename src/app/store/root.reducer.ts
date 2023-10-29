import { ActionReducerMap } from '@ngrx/store';

import * as fromIndex from '../index/store/index.reducer';
import * as fromLayout from '../shared/layout/store/layout.reducer';
import * as fromScheme from '../shared/scheme/store/scheme.reducer';

export interface RootState {
  index: fromIndex.State;
  layout: fromLayout.State;
  scheme: fromScheme.State;
}

export const rootReducer: ActionReducerMap<RootState> = {
  index: fromIndex.reducer,
  layout: fromLayout.reducer,
  scheme: fromScheme.reducer,
};
