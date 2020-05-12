import { createAction, props } from '@ngrx/store';
import { ActionPayload } from '../store';
import { Team } from 'src/app/shared/models/team.model';

export enum teamsActionType {
    getTeams = '[TEAMS] get all teams',
    getTeamsSuccess = '[TEAMS] teams loaded success',
    getTeamsError = '[TEAMS] teams loaded error'
}

export const getTeamsAction = createAction(teamsActionType.getTeams);
export const getTeamsSuccessAction = createAction(teamsActionType.getTeamsSuccess, props<ActionPayload<Team[]>>());
export const getTeamsErrorAction = createAction(teamsActionType.getTeamsError, props<ActionPayload<Team[]>>());