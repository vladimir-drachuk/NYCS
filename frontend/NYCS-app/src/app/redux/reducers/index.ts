import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { teamReducer } from './teams.reducer';
import { matchReducer } from './matches.reducer'
import { State } from '../store';

export const reducers: ActionReducerMap<State> = {
  teams: teamReducer,
  matches: matchReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
