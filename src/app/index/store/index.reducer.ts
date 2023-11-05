import { createReducer, on } from '@ngrx/store';

import { CountriesData, Filter } from '../index.model';
import * as IndexActions from './index.actions';

export type State = { data: CountriesData; filter: Filter };

const initialState: State = { data: null, filter: null };

export const reducer = createReducer(
  initialState,
  on(IndexActions.setData, (state, action): State => {
    const data = [...action.data];

    data.sort((a, b) => (a.name < b.name ? -1 : 1));

    return { ...state, data };
  }),
  on(IndexActions.setFilter, (state, action): State => {
    const filter = action.filter;
    const field = filter.field;
    const value = filter.value;

    let newFilter: Filter;

    switch (true) {
      case field === `name` && !!value:
        newFilter = { field, value: value.toLowerCase() };
        break;
      case field === `region`:
        newFilter = filter;
        break;
      default:
        newFilter = null;
    }

    return { ...state, filter: newFilter };
  })
);
