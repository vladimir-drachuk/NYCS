import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, zip, EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Match } from 'src/app/shared/models/match.model';
import { Series } from 'src/app/shared/models/series.model';
import { Team } from 'src/app/shared/models/team.model';
import * as matchesSelectors from 'src/app/redux/selectors/matches.selectors';
import * as teamsSelectors from 'src/app/redux/selectors/teams.selectors';
import * as seriesSelectors from 'src/app/redux/selectors/series.selectors';

@Component({
  selector: 'app-series-detailed',
  templateUrl: './series-detailed.component.html',
  styleUrls: ['./series-detailed.component.scss']
})
export class SeriesDetailedComponent implements OnInit, OnDestroy {

  private paramsArr: string[] = this.route.snapshot.params.seriesString.split('-');

  private subscription: Subscription;
  public matches: Match[];
  public series: Series;
  public team1: Team;
  public team2: Team;

  public stat: string = 'Regular Statistics';

  public team1$: Observable<Team> = this.store
    .pipe(select(teamsSelectors.getByTag, { teamtag: this.paramsArr[0]}));

  public team2$: Observable<Team> = this.store
    .pipe(select(teamsSelectors.getByTag, { teamtag: this.paramsArr[2]}));

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
    const subscription = this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
          window.scrollTo(0, 0);
          subscription.unsubscribe()
      }
  });
  }

  ngOnInit(): void {
    this.subscription = zip(this.team1$, this.team2$)
      .pipe(
        switchMap((teams: Team[]) => {
          this.team1 = teams[0];
          this.team2 = teams[1];
          if (!this.team1 || !this.team2) {
            this.router.navigateByUrl('error');
            return EMPTY;
          }
          return this.store.pipe(select(seriesSelectors.getByTeamsID, { team1ID: this.team1._id, team2ID: this.team2._id }))
        }),
        switchMap((series: Series) => {
          this.series = series;
          if (!this.series) {
            this.router.navigateByUrl('error');
            return EMPTY;
          }
          return this.store.pipe(select(matchesSelectors.getSeriesMatches, { id: this.series._id }))
        }),
      )
      .subscribe((matches: Match[]) => this.matches = matches);
  }

  public getRegularStat(teamNumber: number): string {
    let result;
    if (teamNumber === 1) {
      result = `(${this.team1.stats.wins}-${this.team1.stats.winsOT}-${this.team1.stats.losesOT}-${this.team1.stats.loses})`;
    } else{
      result = `(${this.team2.stats.wins}-${this.team2.stats.winsOT}-${this.team2.stats.losesOT}-${this.team2.stats.loses})`;
    }
    return result;
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

  public getCompletedMatches(): Match[] {
    return this.matches.filter((match: Match) => match.isComplete)
  }

  public getPlannedMatches(): Match[] {
    return this.matches.filter((match: Match) => !match.isComplete)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
