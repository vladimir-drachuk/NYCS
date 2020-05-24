import { Match } from '../shared/models/match.model';
import { Team } from '../shared/models/team.model';
import { Series } from '../shared/models/series.model';

export interface State {
    teams: TeamsState;
    matches: MatchesState;
    series: SeriesState;
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
  isProcessUpdateLoading: boolean;
  isProcessScheduleLoadinng: boolean;
  isError: boolean;
}

export interface SeriesState {
  data: Series[],
  isLoaded: boolean,
  isError: boolean
}

export interface AppState {
  isEdit: boolean;
  isPLayoff: boolean;
  isHalfFinals: boolean;
  isNYCSFInals: boolean;
  isChampComplete: boolean;
  isLoading: boolean;
  isError: boolean;
}
  
export interface ActionPayload<T> {
payload: T;
};