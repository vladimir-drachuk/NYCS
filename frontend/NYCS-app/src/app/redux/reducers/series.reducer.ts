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
    
)

export function seriesReducer(state: SeriesState, action: Action) {
  return reducer(state, action);
}
