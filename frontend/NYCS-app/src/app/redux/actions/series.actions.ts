import { createAction, props } from '@ngrx/store';
import { ActionPayload, SeriesState } from '../store';

export enum seriesActionType {
    getSeries = '[SERIES] get all series',
    getSeriesSuccess = '[SERIES] series loaded success',
    getSeriesError = '[SERIES] series loaded error'
}

export const getSeriesAction = createAction(seriesActionType.getSeries);
export const getSeriesSuccessAction = createAction(seriesActionType.getSeriesSuccess, props<ActionPayload<SeriesState>>());
export const getSeriesErrorAction = createAction(seriesActionType.getSeriesError, props<ActionPayload<SeriesState>>());