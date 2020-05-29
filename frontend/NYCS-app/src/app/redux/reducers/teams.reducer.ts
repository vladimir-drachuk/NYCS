import { createReducer, on, Action } from '@ngrx/store';

import { TeamsState, ActionPayload } from '../store';
import { Team } from 'src/app/shared/models/team.model';
import * as teamsAction from '../actions/teams.actions';


const initialState: TeamsState = {
    data: [],
    isLoaded: false,
    isError: false,
    isTeamsInit: false
}

const reducer = createReducer(initialState,
    on(teamsAction.getTeamsAction),
    on(teamsAction.getTeamsSuccessAction, (state, action) => action.payload),
    on(teamsAction.getTeamsErrorAction, (state, action) => action.payload),
    on(teamsAction.getOnlyStats),
    on(teamsAction.getOnlyStatsError),
    on(teamsAction.getOnlyStatsSuccess, (state: TeamsState, action) => ({
            ...state,
            isLoaded: true,
            isError: false,
            data: state.data.map((team: Team) => ({
                ...team,
                stats: action.payload.find((statsObj) => team._id === statsObj._id).stats
            }))
        })
    )
);

export function teamReducer(state: TeamsState, action: Action) {
    return reducer(state, action)
}


