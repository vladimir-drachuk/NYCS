import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Match } from 'src/app/shared/models/match.model';
import { Series } from 'src/app/shared/models/series.model';
import { Team } from 'src/app/shared/models/team.model';
import * as matchesSelectors from 'src/app/redux/selectors/matches.selectors';
import * as teamsSelectors from 'src/app/redux/selectors/teams.selectors';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit, OnDestroy {

  private subscription1: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;

  @Input() public series: Series;
  public matches$: Observable<Match[]> = this.store
    .select(matchesSelectors.getAll)
    .pipe(map((matches: Match[]) => matches.filter((match: Match) => match.series === this.series._id)));

  public team1$: Observable<Team> = this.store
    .select(teamsSelectors.getAll)
    .pipe(map((teams: Team[]) => teams.find((team: Team) => team._id === this.series.team1ID)));

  public team2$: Observable<Team> = this.store
    .select(teamsSelectors.getAll)
    .pipe(map((teams: Team[]) => teams.find((team: Team) => team._id === this.series.team2ID)));

  public matches: Match[];
  public team1: Team;
  public team2: Team;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subscription1 = this.matches$.subscribe((matches: Match[]) => this.matches = matches);
    this.subscription2 = this.team1$.subscribe((team1: Team) => this.team1 = team1);
    this.subscription3 = this.team2$.subscribe((team2: Team) => this.team2 = team2);
  }

  public getSeriesTitle(): string {
    let seriesHalf = (this.series.half === 'black' || this.series.half === 'white') ? this.series.half : '';
    return `${seriesHalf} ${this.series.tag}`;
    
  }

  public getColor(teamNumber: number, color: string): string {
    let result;
    if (teamNumber === 1) {
      if (this.team1) {
        result = color === 'primary' ? this.team1.colors.primary : this.team1.colors.secondary
      }
    } else {
      if (this.team2) {
        result = color === 'primary' ? this.team2.colors.primary : this.team2.colors.secondary
      }
    }
    return result;
  }

  public getImageParams(teamNumber: number, attr: string): string {
    let result;
    if (teamNumber === 1) {
      if (this.team1) {
        result = attr === 'src' ? this.team1.logo.src : this.team1.logo.alt
      }
    } else {
      if (this.team2) {
        result = attr === 'src' ? this.team2.logo.src : this.team2.logo.alt
      }
    }
    return result;
  }

  public getShortName(teamNumber: number): string {
    let result;
    if (teamNumber === 1) {
      if (this.team1) result = this.team1.shortname;
    } else {
      if (this.team2) result = this.team2.shortname;
    }
    return result;
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

}
