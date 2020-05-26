import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from '../models/match.model';
import { UpdateTime } from '../models/updateMatchTime';

@Injectable()
export class DbService {

  private url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  public getAllTeams(): Observable<Object> {
    return this.http.get(`${this.url}/teams`);
  }

  public getAllMatches(): Observable<Object> {
    return this.http.get(`${this.url}/matches`);
  }

  public getAllSeries(): Observable<Object> {
    return this.http.get(`${this.url}/series`)
  }

  public createSchedule(matches: Match[]): Observable<Object> {
    return this.http.post(`${this.url}/matches`, matches)
  }

  public updateMatch(match: Match): Observable<Object> {
    return this.http.put(`${this.url}/matches`, match);
  }

  public updateTime(time: UpdateTime): Observable<Object> {
    return this.http.put(`${this.url}/matches/time`, time)
  }

  public goToPlayoffNextRound(value: string): Observable<Object> {
    return this.http.post(`${this.url}/series`, { type: value });
  }

  public correctFinals(): Observable<Object> {
    return this.http.put(`${this.url}/series`, {});
  }

  public deleteSeries(value: string): Observable<Object> {
    return this.http.request('delete', `${this.url}/series`,{ body: { type: value } })
  }
}
