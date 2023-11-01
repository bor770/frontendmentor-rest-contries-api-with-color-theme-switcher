import { createReducer, on } from '@ngrx/store';

import { AllCountriesData } from '../index.model';
import * as IndexActions from './index.actions';

export type State = { data: AllCountriesData };

const initialState: State = { data: null };

export const reducer = createReducer(
  initialState,
  on(
    IndexActions.set,
    (state, action): State => ({ ...state, data: action.data })
  )
);
