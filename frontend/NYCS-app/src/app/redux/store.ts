import { Match } from '../shared/models/match.model';
import { Team } from '../shared/models/team.model';

export interface State {
    teams: TeamsState;
    matches: MatchesState;
    appState: AppState;
}

export interface TeamsState {
  data: Team[];
  isLoaded: boolean;
  isError: boolean;
}

export interface MatchesState {
  data: Match[];
  isLoaded: boolean;
  isProcessLoading: boolean;
  isError: boolean;
}

export interface AppState {
  isEdit: boolean;
}
  
export interface ActionPayload<T> {
payload: T;
};