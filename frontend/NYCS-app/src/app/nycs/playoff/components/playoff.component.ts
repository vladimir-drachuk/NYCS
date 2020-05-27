import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Series } from 'src/app/shared/models/series.model';
import { getAll } from 'src/app/redux/selectors/series.selectors';

@Component({
  selector: 'app-playoff',
  templateUrl: './playoff.component.html',
  styleUrls: ['./playoff.component.scss']
})
export class PlayoffComponent implements OnInit {

  public series: Observable<Series[]> = this.store.select(getAll);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
