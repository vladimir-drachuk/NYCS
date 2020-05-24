import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, SeriesState } from '../store';

const selectSeriesObj = createFeatureSelector<State, SeriesState>('series');

export const getAll = createSelector(
    selectSeriesObj,
    (obj: SeriesState) => obj.data
)