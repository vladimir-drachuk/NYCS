import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Match } from '../../../shared/models/match.model';
import * as matchesSelectors from '../../../redux/selectors/matches.selectors';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  public matches: Observable<Match[]> = this.store.select(matchesSelectors.getAll);

  constructor(private store: Store) { }
}
