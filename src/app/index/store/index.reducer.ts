import { createReducer, on } from '@ngrx/store';

import { Filter } from '../index.model';
import * as IndexActions from './index.actions';

export interface State {
  filter: Filter;
}

const initialState: State = { filter: null };

export const reducer = createReducer(
  initialState,
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

    return { ...state, filter: { ...newFilter } };
  })
);
