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
    on(appActions.toHalfFinalsError, (state: AppState) => ({ ...state, isLoading: false, isError: true, isHalfFinals: false })),
    on(appActions.destroyHalfFinals, (state: AppState) => ({ ...state, isLoading: true })),
    on(appActions.destroyHalfFinalSuccess, (state: AppState) => ({ ...state, isLoading: false, isHalfFinals: false })),
    on(appActions.destroyHalfFinalError, (state: AppState) => ({ ...state, isLoading: false, isHalfFinals: true, isError: true })),
    on(appActions.toNYCSFinals, (state: AppState) => ({ ...state, isLoading: true })),
    on(appActions.toNYCSFinalsSuccess, (state: AppState) => ({ ...state, isLoading: false, isNYCSFInals: true })),
    on(appActions.toNYCSFinalsError, (state: AppState) => ({ ...state, isLoading: false, isError: true, isNYCSFInals: false })),
    on(appActions.destroyNYCSFinals, (state: AppState) => ({ ...state, isLoading: true })),
    on(appActions.destroyNYCSFinalSuccess, (state: AppState) => ({ ...state, isLoading: false, isNYCSFInals: false })),
    on(appActions.destroyNYCSFinalError, (state: AppState) => ({ ...state, isLoading: false, isNYCSFInals: true, isError: true })),
    on(appActions.completeChamp, (state: AppState) => ({ ...state, isLoading: true })),
    on(appActions.completeChampSuccess, (state: AppState) => ({ ...state, isLoading: false, isChampComplete: true })),
    on(appActions.completeChampError, (state: AppState) => ({ ...state, isChampComplete: false, isError: true })),
    on(appActions.correctFinals, (state: AppState) => ({ ...state, isLoading: true })),
    on(appActions.correctFinalsSuccess, (state: AppState) => ({ ...state, isLoading: false, isChampComplete: false })),
    on(appActions.correctFinalsError, (state: AppState) => ({ ...state, isChampComplete: true, isError: true })),
    on(appActions.initTourneyStatus, (state: AppState, action: ActionPayload<Series[]>) => ({
            ...state, 
            isPLayoff: (action.payload.length > 0),
            isHalfFinals: (action.payload.filter((series: Series) => series.tag === 'Half-Finals').length > 0),
            isNYCSFInals: (action.payload.filter((series: Series) => series.tag === 'NYCS Finals').length > 0),
            isChampComplete: (action.payload.filter((series: Series) => series.tag === 'NYCS Finals')[0].isChampComplete)
        })
    )     
);

export function appstateReducer(state: AppState, action: Action) {
    return reducer(state, action);
}