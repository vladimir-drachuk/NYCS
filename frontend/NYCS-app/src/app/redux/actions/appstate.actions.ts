import { createAction } from '@ngrx/store';


export enum appstateActionsType {
    editMode = '[APPSTATE] edit mode is activated',
    regularMode = '[APPSTATE] edit mode is deactivated to regular mode',
    initTourneyStatus = '[APPSTATE] init tourney status',
    toPlayoffMode = '[APPSTATE] playoff mode activation',
    playoffModeActivate = '[APPSTATE] playoff mode is activated',
    playoffModeError = '[APPSTATE] playoff mode activation error',
    toRegularMode = '[APPSTATE] deactivated to regular mode'
}

export const editMode = createAction(appstateActionsType.editMode);
export const regularMode = createAction(appstateActionsType.regularMode);
export const toPlayoffMode = createAction(appstateActionsType.toPlayoffMode);
export const toRegularMode = createAction(appstateActionsType.toRegularMode);
export const playoffModeActivate = createAction(appstateActionsType.playoffModeActivate);
export const playoffModeError = createAction(appstateActionsType.playoffModeError);