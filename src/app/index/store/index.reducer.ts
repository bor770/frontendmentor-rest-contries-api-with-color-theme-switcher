import { createReducer, on } from '@ngrx/store';

import * as IndexActions from './index.actions';

export type State = {
  capital: string;
  flag: { alt: string; svg: string };
  name: string;
  population: number;
  region: string;
}[];

const initialState: State = null;

export const reducer = createReducer(
  initialState,
  on(IndexActions.set, (state, action): State => action.data)
);
