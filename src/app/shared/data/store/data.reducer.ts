import { createReducer, on } from '@ngrx/store';

import { CountriesData } from '../data.model';
import * as DataActions from './data.actions';

export type State = CountriesData;

const initialState: State = [];

export const reducer = createReducer(
  initialState,
  on(
    DataActions.setAdditional,
    (state, action): State =>
      state.map((stateData) => {
        const data = action.data;

        const actionData = data.find(
          (dataFromAction) => stateData.name === dataFromAction.name
        );

        return {
          ...stateData,
          ...actionData,
          borders: actionData.borders
            .map(
              (border) => data.find((country) => country.cca3 === border).name
            )
            .sort(),
          capital: stateData.capital,
          currencies: [...actionData.currencies].sort(),
          languages: [...actionData.languages].sort(),
          nativeNames: [...actionData.nativeNames].sort(),
          tld: [...actionData.tld].sort(),
        };
      })
  ),
  on(
    DataActions.setInitial,
    (state, action): State =>
      [...action.data].sort((a, b) => (a.name < b.name ? -1 : 1))
  )
);
