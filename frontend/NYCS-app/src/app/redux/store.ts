import { Match } from '../shared/models/match.model';
import { Team } from '../shared/models/team.model';

export interface State {
    teams: Team[];
    matches: Match[];
  }
  
export interface ActionPayload<T> {
payload: T;
};