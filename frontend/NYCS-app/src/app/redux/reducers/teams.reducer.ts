import { createReducer, on, Action } from '@ngrx/store';

import { TeamsState } from '../store';
import { getTeamsAction, getTeamsSuccessAction, getTeamsErrorAction } from '../actions/teams.actions';


const initialState: TeamsState = {
    data: [],
    isLoaded: false,
    isError: false
}

const reducer = createReducer(initialState,
    on(getTeamsAction),
    on(getTeamsSuccessAction, (state, action) => action.payload),
    on(getTeamsErrorAction, (state, action) => action.payload)
);

export function teamReducer(state: TeamsState, action: Action) {
    return reducer(state, action)
}


