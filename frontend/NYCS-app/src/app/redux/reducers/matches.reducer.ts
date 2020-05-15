import { createReducer, on, Action } from '@ngrx/store';

import { MatchesState } from '../store';
import { Match } from 'src/app/shared/models/match.model';
import * as actions from '../actions/matches.actions';


const initialState: MatchesState = {
  data: [],
  isLoaded: false,
  isError: false
};

const reducer = createReducer(initialState,
  on(actions.getMatchesAction),
  on(actions.getMatchesSuccessAction, (state, action) => action.payload),
  on(actions.getMatchesErrorAction, (state, action) => action.payload),
  on(actions.updateMatch, (state, action) => ({ ...state, data: state.data.map((match: Match) => 
      action.payload._id === match._id ? action.payload : match
    )})
  ),
  on(actions.updateMatchSuccess, state => {
    console.log('eeee');
    return state}),
  on(actions.updateMatchError),
)

export function matchReducer(state: MatchesState, action: Action) {
  return reducer(state, action);
}
