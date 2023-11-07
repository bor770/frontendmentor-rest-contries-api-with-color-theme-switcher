import { createReducer, on } from '@ngrx/store';

import { CountriesData } from '../data.model';
import * as DataActions from './data.actions';

export type State = CountriesData;

const initialState: State = [];

export const reducer = createReducer(
  initialState,
  on(
    DataActions.setInitial,
    (state, action): State =>
      [...action.data].sort((a, b) => (a.name < b.name ? -1 : 1))
  )
);