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

export const isMatchLoading = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.isProcessUpdateLoading
)

export const isScheduleLoading = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.isProcessScheduleLoadinng
)

export const getAll = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.data.filter(match => match) // app throw error wihout filter
)

export const getAllSorted = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => {
        const sortMatches = [...obj.data]; 
        return sortMatches.sort((a, b) => +b.isComplete - +a.isComplete)
    }
)

export const getRegular = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.data.filter(match => match.tourneyStatus === 'Regular')
)

export const getComplete = createSelector(
    selectMatchesObj,
    (obj: MatchesState) => obj.data.filter(match => match.isComplete === true)
)