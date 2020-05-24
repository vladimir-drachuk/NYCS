import { createReducer, on, Action } from '@ngrx/store';

import { AppState, ActionPayload } from "../store";
import { Series } from 'src/app/shared/models/series.model';
import * as appActions from '../actions/appstate.actions'

const initialState: AppState = {
    isEdit: false,
    isPLayoff: false,
    isHalfFinals: false,
    isNYCSFInals: false,
    isChampComplete: false,
    isLoading: false,
    isError: false,
};

const reducer = createReducer(initialState,
    on(appActions.editMode, (state: AppState) => ({ ...state, isEdit: true })),
    on(appActions.regularMode, (state: AppState) => ({ ...state, isEdit: false })),
    on(appActions.toRegularChampMode, (state: AppState) => ({ ...state, isLoading: true })),
    on(appActions.regularChampModeActivate, (state: AppState) => ({ ...state, isPLayoff: false, isLoading: false })),
    on(appActions.regularChampModeError,  (state: AppState) => ({ ...state, isPLayoff: true, isLoading: false, isError: true })),
    on(appActions.toPlayoffMode, (state: AppState) => ({ ...state, isLoading: true })),
    on(appActions.playoffModeActivate, (state: AppState) => ({ ...state, isPLayoff: true, isLoading: false })),
    on(appActions.playoffModeError, (state: AppState) => ({ ...state, isPLayoff: false, isLoading: false, isError: true })),
    on(appActions.toHalfFinals, (state: AppState) => ({ ...state, isLoading: true })),
    on(appActions.toHalfFinalsSuccess, (state: AppState) => ({ ...state, isLoading: false, isHalfFinals: true })),
    on(appActions.toHalfFinalsError, (state: AppState) => ({ ...state, isLoading: false, isError: true })),
    on(appActions.initTourneyStatus, (state: AppState, action: ActionPayload<Series[]>) => ({
            ...state, 
            isPLayoff: (action.payload.length > 0),
            isHalfFinals: (action.payload.filter((series: Series) => series.tag === 'Half-Finals').length > 0), 
        })),     
);

export function appstateReducer(state: AppState, action: Action) {
    return reducer(state, action);
}