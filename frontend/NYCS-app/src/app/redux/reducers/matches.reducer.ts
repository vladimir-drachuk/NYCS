import { createReducer, on, Action } from '@ngrx/store';

import { getMatchesAction, getMatchesSuccessAction, getMatchesErrorAction } from '../actions/matches.actions';
import { MatchesState } from '../store';

const initialState: MatchesState = {
  data: [],
  isLoaded: false,
  isError: false
};

const reducer = createReducer(initialState,
  on(getMatchesAction),
  on(getMatchesSuccessAction, (state, action) => action.payload),
  on(getMatchesErrorAction, (state, action) => action.payload)
)


export function matchReducer(state: MatchesState, action: Action) {
  return reducer(state, action);
}
