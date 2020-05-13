import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, MatchesState } from '../store';

const selectMatchesObj = createFeatureSelector<State, MatchesState>('matches');

export const isLoaded = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.isLoaded
)

export const isError = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.isError
)

export const getAll = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.data.filter(match => match) // app throw error wihout filter
)

export const getRegular = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.data.filter(match => match.tourneyStatus === 'Regular')
)

export const getComplete = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.data.filter(match => match.isComplete === true)
)