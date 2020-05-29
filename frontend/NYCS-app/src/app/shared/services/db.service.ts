import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from '../models/match.model';
import { UpdateTime } from '../models/updateMatchTime';

@Injectable()
export class DbService {

  constructor(private http: HttpClient) { }

  public getAllTeams(): Observable<Object> {
    return this.http.get('teams');
  }

  public getOnlyTeamStats(): Observable<Object> {
    return this.http.get('teams/stats');
  }

  public getAllMatches(): Observable<Object> {
    return this.http.get('matches');
  }

  public getAllSeries(): Observable<Object> {
    return this.http.get('series')
  }

  public createSchedule(matches: Match[]): Observable<Object> {
    return this.http.post('matches', matches)
  }

  public updateMatch(match: Match): Observable<Object> {
    return this.http.put('matches', match);
  }

  public updateTime(time: UpdateTime): Observable<Object> {
    return this.http.put('matches/time', time)
  }

  public goToPlayoffNextRound(value: string): Observable<Object> {
    return this.http.post('series', { type: value });
  }

  public correctFinals(): Observable<Object> {
    return this.http.put('series', {});
  }

  public deleteSeries(value: string): Observable<Object> {
    return this.http.request('delete', 'series', { body: { type: value } })
  }
}
