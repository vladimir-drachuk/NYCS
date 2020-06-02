import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, SeriesState } from '../store';
import { Series } from 'src/app/shared/models/series.model';

const selectSeriesObj = createFeatureSelector<State, SeriesState>('series');

export const getAll = createSelector(
    selectSeriesObj,
    (obj: SeriesState) => obj.data
)

export const isLoaded = createSelector(
    selectSeriesObj,
    (obj: SeriesState) => obj.isLoaded
)

export const getByTeamsID = createSelector(
    selectSeriesObj,
    (obj: SeriesState, props) => obj.data
        .find((series: Series) => series.team1ID === props.team1ID && series.team2ID === props.team2ID)
)