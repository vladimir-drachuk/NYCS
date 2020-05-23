import { createReducer, on, Action } from '@ngrx/store';

import { AppState, ActionPayload } from "../store";
import { Series } from 'src/app/shared/models/series.model';
import * as appActions from '../actions/appstate.actions'

const initialState: AppState = {
    isEdit: false,
    isPLayoff: false
};

const reducer = createReducer(initialState,
    on(appActions.editMode, (state: AppState) => ({ ...state, isEdit: true })),
    on(appActions.regularMode, (state: AppState) => ({ ...state, isEdit: false })),
    on(appActions.toPlayoffMode, (state: AppState) => ({ ...state, isPLayoff: true })),
    on(appActions.toRegularMode),
    on(appActions.playoffModeActivate),
    on(appActions.playoffModeError, (state: AppState) => ({ ...state, isPLayoff: false })),
    on(appActions.initTourneyStatus, (state: AppState, action: ActionPayload<Series[]>) => {
        let newState;
        newState = (action.payload.length > 0)
         ? { ...state, isPLayoff: true }
         : { ...state, isPLayoff: false };
        return newState;
    }),
);

export function appstateReducer(state: AppState, action: Action) {
    return reducer(state, action);
}