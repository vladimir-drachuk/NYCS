import { createAction, props } from '@ngrx/store';
import { ActionPayload, MatchesState } from '../store';

export enum matchesActionType {
    getMatches = '[MATCHES] get all matches',
    getMatchesSuccess = '[MATCHES] matches loaded success',
    getMatchesError = '[MATCHES] matches loaded error'
}

export const getMatchesAction = createAction(matchesActionType.getMatches);
export const getMatchesSuccessAction = createAction(matchesActionType.getMatchesSuccess, props<ActionPayload<MatchesState>>());
export const getMatchesErrorAction = createAction(matchesActionType.getMatchesError, props<ActionPayload<MatchesState>>());