import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Match } from '../../../shared/models/match.model';
import { animations } from 'src/app/animations';
import * as matchesSelectors from '../../../redux/selectors/matches.selectors';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  animations: animations.opacity()
})
export class ScheduleComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public matches$: Observable<Match[]> = this.store.select(matchesSelectors.getAll);
  public showMatches: Match[];
  public hideMatches: Match[];
  public showMatchesNumber: number = 10;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subscription = this.matches$.subscribe(matches => {
      const matchesBuffer: Match[] = [...matches];
      this.showMatches = matchesBuffer.reverse().splice(0, this.showMatchesNumber);
      this.hideMatches = matchesBuffer;
    });
  }

  public getMatches(): Match[] {
    return this.showMatches;
  }

  public showMore(): void {
    const bufferMatches: Match[] = this.hideMatches.splice(0, this.showMatchesNumber);
    this.showMatches.push(...bufferMatches); 
  }

  public disableMoreButton(): boolean {
    return this.hideMatches.length === 0;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
