import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Match } from 'src/app/shared/models/match.model';
import { Series } from 'src/app/shared/models/series.model';
import { getAll } from 'src/app/redux/selectors/matches.selectors';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  @Input() public series: Series;
  public matches: Observable<Match[]> = this.store
    .select(getAll)
    .pipe(map((matches: Match[]) => matches.filter((match: Match) => match.series === this.series._id)));

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
