import { ActionReducerMap } from '@ngrx/store';

import { teamReducer } from './teams.reducer';
import { matchReducer } from './matches.reducer'
import { State } from '../store';
import { appstateReducer } from './appstate.reducer';

export const reducers: ActionReducerMap<State> = {
  teams: teamReducer,
  matches: matchReducer,
  appState: appstateReducer
};
