import { createAction, props } from '@ngrx/store';
import { ActionPayload, TeamsState } from '../store';
import { StatsTeam } from 'src/app/shared/models/team.model';

export enum teamsActionType {
    getTeams = '[TEAMS] get all teams',
    getTeamsSuccess = '[TEAMS] teams loaded success',
    getTeamsError = '[TEAMS] teams loaded error',
    getOnlyStats = '[TEAMS] updating stats...',
    getOnlyStatsSuccess = '[TEAMS] teams stats updated',
    getOnlyStatsError = '[TEAMS] updating stats error',
}

export const getTeamsAction = createAction(teamsActionType.getTeams);
export const getTeamsSuccessAction = createAction(teamsActionType.getTeamsSuccess, props<ActionPayload<TeamsState>>());
export const getTeamsErrorAction = createAction(teamsActionType.getTeamsError, props<ActionPayload<TeamsState>>());
export const getOnlyStats = createAction(teamsActionType.getOnlyStats);
export const getOnlyStatsSuccess = createAction(teamsActionType.getOnlyStatsSuccess, props<ActionPayload<StatsTeam[]>>());
export const getOnlyStatsError = createAction(teamsActionType.getOnlyStatsError);