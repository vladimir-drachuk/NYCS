import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Series } from 'src/app/shared/models/series.model';
import { Team } from 'src/app/shared/models/team.model';
import { getAll } from 'src/app/redux/selectors/teams.selectors';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit, OnDestroy {

  @Input() series: Series;

  private subscription1: Subscription;
  private subscription2: Subscription;

  public team1: Team;
  public team2: Team;

  public team1$: Observable<Team> = this.store
  .select(getAll)
  .pipe(map((teams: Team[]) => teams.find((team: Team) => team._id === this.series.team1ID)));

public team2$: Observable<Team> = this.store
  .select(getAll)
  .pipe(map((teams: Team[]) => teams.find((team: Team) => team._id === this.series.team2ID)));

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.subscription1 = this.team1$.subscribe((team1: Team) => this.team1 = team1);
    this.subscription2 = this.team2$.subscribe((team2: Team) => this.team2 = team2);
  }

  public isHalfShown(): boolean {
    return !(this.series.tag === 'NYCS Finals');
  }

  public toDetailedPage(): void {
    this.router.navigate([
      'playoff',
      `${this.team1.teamtag}-vs-${this.team2.teamtag}`]);
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
