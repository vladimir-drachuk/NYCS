import { createReducer, on, Action } from '@ngrx/store';

import { Match } from '../../shared/models/match.model';
import { getMatchesAction, getMatchesSuccessAction, getMatchesErrorAction } from '../actions/matches.actions';

const initialState: Match[] = [];

const reducer = createReducer(initialState,
  on(getMatchesAction),
  on(getMatchesSuccessAction, (state, action) => action.payload),
  on(getMatchesErrorAction, (state, action) => action.payload)
)


export function matchReducer(state: Match[] | [], action: Action) {
  return reducer(state, action);
}
