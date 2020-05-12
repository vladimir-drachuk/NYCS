import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';

import { Team } from '../models/team.model';
import { Match } from '../models/match.model';

@Injectable()
export class DbService {

  private url = 'http://localhost:4000';

  public teams: BehaviorSubject<Team[]> = new BehaviorSubject([]);
  public matches: BehaviorSubject<Match[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private store: Store) {
    this.getAllTeams().subscribe((items: Team[]) => this.teams.next(items));
    this.getAllMatches().subscribe((items: Match[]) => this.matches.next(items));
  }

  public getAllTeams(): Observable<Object> {
    return this.http.get(`${this.url}/teams`);
  }

  public getAllMatches(): Observable<Object> {
    return this.http.get(`${this.url}/matches`);
  }
}
