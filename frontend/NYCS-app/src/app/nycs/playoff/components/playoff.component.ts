import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Series } from 'src/app/shared/models/series.model';
import { getAll } from 'src/app/redux/selectors/series.selectors';
import { animations } from '../../../animations';

@Component({
  selector: 'app-playoff',
  templateUrl: './playoff.component.html',
  styleUrls: ['./playoff.component.scss'],
  animations: animations.opacity()
})
export class PlayoffComponent implements OnInit, OnDestroy {

  private showingAmount: number;
  private subscription: Subscription;
  public series$: Observable<Series[]> = this.store.select(getAll);
  public showSeries: Series[];
  public hideSeries: Series[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subscription = this.series$.subscribe((series: Series[]) => {
      const seriesBuffer: Series[] = [...series];
      this.showingAmount = (series.filter((ser) => ser.tag === 'NYCS Finals')) ? 1 : 2;
      this.showSeries = seriesBuffer.reverse().splice(0, this.showingAmount);
      this.hideSeries = seriesBuffer;
    })
  }

  public showMoreSeries(): void {
    this.showingAmount = 2;
    const seriesBuffer: Series[] = this.hideSeries.splice(0, this.showingAmount);
    this.showSeries.push(...seriesBuffer); 
  }

  public moreButtonDisable(): boolean {
    return this.hideSeries.length === 0;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
