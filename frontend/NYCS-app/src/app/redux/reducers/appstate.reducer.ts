import { AppState } from "../store";
import { createReducer, on, Action } from '@ngrx/store';

import * as appActions from '../actions/appstate.actions'


const initialState: AppState = {
    isEdit: false,
    isPLayoff: false
};

const reducer = createReducer(initialState,
    on(appActions.editMode, (state: AppState) => ({ ...state, isEdit: true })),
    on(appActions.regularMode, (state: AppState) => ({ ...state, isEdit: false })),
    on(appActions.toPlayoffMode),
    on(appActions.toRegularMode),
    on(appActions.playoffModeActivate, (state: AppState) => ({ ...state, isPLayoff: true })),
    on(appActions.playoffModeError, (state: AppState) => ({ ...state, isPLayoff: false }))
);

export function appstateReducer(state: AppState, action: Action) {
    return reducer(state, action);
}