import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Match } from 'src/app/shared/models/match.model';
import { Team } from 'src/app/shared/models/team.model';
import { getAll } from 'src/app/redux/selectors/teams.selectors'

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {

  @Input() match: Match;
  public team1: Observable<Team> = this.store
    .select(getAll)
    .pipe(map((teams: Team[]) => teams.find((team: Team) => team._id === this.match.team1ID)));
  public team2: Observable<Team> = this.store
    .select(getAll)
    .pipe(map((teams: Team[]) => teams.find((team: Team) => team._id === this.match.team2ID)))

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public showOT(): string {
    let result = '';
    if (this.match.isOT) result = (this.match.isKR) ? 'KR' : 'OT';
    return result;
  }

}
