import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/internal/Observable';
import { Team } from 'src/app/shared/models/team.model';
import { getAll } from 'src/app/redux/selectors/teams.selectors';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public teams: Observable<Team[]> = this.store.select(getAll);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
