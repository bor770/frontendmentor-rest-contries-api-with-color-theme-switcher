import { ActionReducerMap } from '@ngrx/store';

import * as fromLayout from '../shared/layout/store/layout.reducer';
import * as fromScheme from '../shared/scheme/store/scheme.reducer';

export interface RootState {
  layout: fromLayout.State;
  scheme: fromScheme.State;
}

export const rootReducer: ActionReducerMap<RootState> = {
  layout: fromLayout.reducer,
  scheme: fromScheme.reducer,
};
