import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, TeamsState } from '../store';

const selectTeamsObj = createFeatureSelector<State, TeamsState>('teams');

export const initTeams = createSelector(
    selectTeamsObj,
    (obj: TeamsState) => obj.isTeamsInit
)

export const isLoaded = createSelector(
    selectTeamsObj,
    (obj: TeamsState) => obj.isLoaded
)

export const isError = createSelector(
    selectTeamsObj,
    (obj: TeamsState) => obj.isError
)

export const getAll = createSelector(
    selectTeamsObj,
    (obj: TeamsState) => obj.data.filter(team => team) // sort pipe throw error without filter
)

export const getWhite = createSelector(
    selectTeamsObj,
    (obj: TeamsState) => obj.data.filter(team => team.half === 'white')
)

export const getBlack = createSelector(
    selectTeamsObj,
    (obj: TeamsState) => obj.data.filter(team => team.half === 'black')
)

export const getByTag = createSelector(
    selectTeamsObj,
    (obj: TeamsState, props) => obj.data.filter(team => team.teamtag === props.teamtag)[0]
)