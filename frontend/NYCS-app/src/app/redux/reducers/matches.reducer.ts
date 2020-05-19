import { createReducer, on, Action } from '@ngrx/store';

import { MatchesState } from '../store';
import * as actions from '../actions/matches.actions';


const initialState: MatchesState = {
  data: [],
  isLoaded: false,
  isProcessUpdateLoading: false,
  isProcessScheduleLoadinng: false,
  isError: false,
};

const reducer = createReducer(initialState,
  on(actions.getMatchesAction),
  on(actions.getMatchesSuccessAction, (state, action) => action.payload),
  on(actions.getMatchesErrorAction, (state, action) => action.payload),
  on(actions.updateMatch, (state) => ({ ...state, isProcessUpdateLoading: true })),
  on(actions.updateMatchSuccess, (state) => ({ ...state, isProcessUpdateLoading: false })),
  on(actions.updateMatchError, (state) => ({ ...state, isLoaded: false, isProcessUpdateLoading: false })),
  on(actions.changeShedule, (state) => ({ ...state, isProcessScheduleLoadinng: true })),
  on(actions.changeSheduleSuccess, (state) => ({ ...state, isProcessScheduleLoadinng: false })),
  on(actions.changeSheduleError, (state) => ({ ...state, isProcessScheduleLoadinng: false }))
)

export function matchReducer(state: MatchesState, action: Action) {
  return reducer(state, action);
}
