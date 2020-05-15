import { createAction, props } from '@ngrx/store';
import { ActionPayload, MatchesState } from '../store';
import { Match } from 'src/app/shared/models/match.model';

export enum matchesActionType {
    getMatches = '[MATCHES] get all matches',
    getMatchesSuccess = '[MATCHES] matches loaded success',
    getMatchesError = '[MATCHES] matches loaded error',
    updateMatch = '[MATCHES] match updated and go to server',
    updateMatchSuccess = '[MATCHES] updated success',
    updateMatchError = '[MATCHES] match updated error',
}

export const getMatchesAction = createAction(matchesActionType.getMatches);
export const getMatchesSuccessAction = createAction(matchesActionType.getMatchesSuccess, props<ActionPayload<MatchesState>>());
export const getMatchesErrorAction = createAction(matchesActionType.getMatchesError, props<ActionPayload<MatchesState>>());
export const updateMatch = createAction(matchesActionType.updateMatch, props<ActionPayload<Match>>())
export const updateMatchSuccess = createAction(matchesActionType.updateMatchSuccess);
export const updateMatchError = createAction(matchesActionType.updateMatchError);