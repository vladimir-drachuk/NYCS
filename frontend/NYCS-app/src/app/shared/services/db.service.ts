import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from '../models/match.model';

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

  public createSchedule(matches: Match[]): Observable<Object> {
    return this.http.post(`${this.url}/matches`, matches)
  }

  public updateMatch(match: Match): Observable<Object> {
    return this.http.put(`${this.url}/matches`, match);
  }
}
