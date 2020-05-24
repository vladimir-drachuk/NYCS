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