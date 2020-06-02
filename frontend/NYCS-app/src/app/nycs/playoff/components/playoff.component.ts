import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Series } from 'src/app/shared/models/series.model';
import { getAll } from 'src/app/redux/selectors/series.selectors';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-playoff',
  templateUrl: './playoff.component.html',
  styleUrls: ['./playoff.component.scss'],
  animations: animations.opacity()
})
export class PlayoffComponent implements OnInit {

  public series$: Observable<Series[]> = this.store.select(getAll);

  public nycsFinal$: Observable<Series> = this.series$
    .pipe(map((series: Series[]) => series.find((ser: Series) => ser.tag === 'NYCS Finals')));

  public halfFinals$: Observable<Series[]> = this.series$
    .pipe(map((series: Series[]) => series.filter((ser: Series) => ser.tag === 'Half-Finals')))

  public semiFinals$: Observable<Series[]> = this.series$
    .pipe(map((series: Series[]) => series.filter((ser: Series) => ser.tag === 'Semi-Finals')))

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
