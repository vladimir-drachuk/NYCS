import { createReducer, on, Action } from '@ngrx/store';

import { SeriesState } from '../store';
import * as actions from '../actions/series.actions';


const initialState: SeriesState = {
  data: [],
  isLoaded: false,
  isError: false,
};

const reducer = createReducer(initialState,
    on(actions.getSeriesAction),
    on(actions.getSeriesSuccessAction, (state, action) => action.payload),
    on(actions.getSeriesErrorAction, (state, action) => action.payload),
)

export function seriesReducer(state: SeriesState, action: Action) {
  return reducer(state, action);
}
