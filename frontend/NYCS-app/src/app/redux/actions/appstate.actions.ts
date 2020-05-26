import { createAction, props } from '@ngrx/store';

import { ActionPayload } from '../store';
import { Series } from 'src/app/shared/models/series.model';


export enum appstateActionsType {
    editMode = '[APPSTATE] edit mode is activated',
    regularMode = '[APPSTATE] edit mode is deactivated to regular mode',
    initTourneyStatus = '[APPSTATE] init tourney status',
    toPlayoffMode = '[APPSTATE] playoff mode activation',
    playoffModeActivate = '[APPSTATE] playoff mode is activated',
    playoffModeError = '[APPSTATE] playoff mode activation error',
    toRegularChampMode = '[APPSTATE] deactivated to regular mode',
    regularChampModeActivate = '[APPSTATE] championship return to regular part',
    regularChampModeError = '[APPSTATE] don`t returned to regular championsip',
    toHalfFinals = '[APPTSATE] half finals activation',
    toHalfFinalsSuccess = '[APPSTATE] half finals is activated',
    toHalfFinalsError = '[APPSTATE] half finals activation error',
    destroyHalfFinals = '[APPSTATE] destroy half finals activation',
    destroyHalfFinalSuccess = '[APPSTATE] destroy half finals',
    destroyHalfFinalError = '[APPSTATE] destroy half finals error',
    toNYCSFinals = '[APPTSATE] NYCS finals activation',
    toNYCSFinalsSuccess = '[APPSTATE] NYCS finals is activated',
    toNYCSFinalsError = '[APPSTATE] NYCS finals activation error',
    destroyNYCSFinals = '[APPSTATE] destroy NYCS finals activation',
    destroyNYCSFinalSuccess = '[APPSTATE] destroy NYCS finals',
    destroyNYCSFinalError = '[APPSTATE] destroy NYCS finals error',
    completeChamp = '[APPSTATE] championship complete activation',
    completeChampSuccess = '[APPSTATE] championship is completed',
    completeChampError = '[APPSTATE] championship complete activation error',
    correctFinals = '[APPSTATE] correct finals activation',
    correctFinalsSuccess = '[APPSTATE] championship is active again',
    correctFinalsError = '[APPSTATE] attempt return to championship is failed'
}

export const editMode = createAction(appstateActionsType.editMode);
export const regularMode = createAction(appstateActionsType.regularMode);
export const initTourneyStatus = createAction(appstateActionsType.initTourneyStatus, props<ActionPayload<Series[]>>())
export const toPlayoffMode = createAction(appstateActionsType.toPlayoffMode);
export const toRegularChampMode = createAction(appstateActionsType.toRegularChampMode);
export const regularChampModeActivate = createAction(appstateActionsType.regularChampModeActivate);
export const regularChampModeError = createAction(appstateActionsType.regularChampModeError);
export const playoffModeActivate = createAction(appstateActionsType.playoffModeActivate);
export const playoffModeError = createAction(appstateActionsType.playoffModeError);
export const toHalfFinals = createAction(appstateActionsType.toHalfFinals);
export const toHalfFinalsSuccess = createAction(appstateActionsType.toHalfFinalsSuccess);
export const toHalfFinalsError = createAction(appstateActionsType.toHalfFinalsError);
export const destroyHalfFinals = createAction(appstateActionsType.destroyHalfFinals);
export const destroyHalfFinalSuccess = createAction(appstateActionsType.destroyHalfFinalSuccess);
export const destroyHalfFinalError = createAction(appstateActionsType.destroyHalfFinalError);
export const toNYCSFinals = createAction(appstateActionsType.toNYCSFinals);
export const toNYCSFinalsSuccess = createAction(appstateActionsType.toNYCSFinalsSuccess);
export const toNYCSFinalsError = createAction(appstateActionsType.toNYCSFinalsError);
export const destroyNYCSFinals = createAction(appstateActionsType.destroyNYCSFinals);
export const destroyNYCSFinalSuccess = createAction(appstateActionsType.destroyNYCSFinalSuccess);
export const destroyNYCSFinalError = createAction(appstateActionsType.destroyNYCSFinalError);
export const completeChamp = createAction(appstateActionsType.completeChamp);
export const completeChampSuccess = createAction(appstateActionsType.completeChampSuccess);
export const completeChampError = createAction(appstateActionsType.completeChampError);
export const correctFinals = createAction(appstateActionsType.correctFinals);
export const correctFinalsSuccess = createAction(appstateActionsType.correctFinalsSuccess);
export const correctFinalsError = createAction(appstateActionsType.correctFinalsError);

