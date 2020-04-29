import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Team } from '../models/team.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DbService {

  private url = 'http://localhost:4000';

  public teams: BehaviorSubject<Team[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getAllTeams().subscribe((items: Team[]) => this.teams.next(items))
  }

  private getAllTeams(): Observable<Object> {
    return this.http.get(`${this.url}/teams`);
  }
}
