import { createReducer, on, Action } from '@ngrx/store';

import { Team } from '../../shared/models/team.model';
import { getTeamsAction, getTeamsSuccessAction, getTeamsErrorAction } from '../actions/teams.actions';


const initialState: Team[] = [];

const reducer = createReducer(initialState,
    on(getTeamsAction),
    on(getTeamsSuccessAction, (state, action) => action.payload),
    on(getTeamsErrorAction, (state, action) => action.payload)
);

export function teamReducer(state: Team[] | [], action: Action) {
    return reducer(state, action)
}


