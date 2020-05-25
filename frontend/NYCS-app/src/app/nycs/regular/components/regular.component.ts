import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Team } from '../../../shared/models/team.model';
import * as teamsSelectors from '../../../redux/selectors/teams.selectors';


@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.scss'],
})
export class RegularComponent {


  public teams: Observable<Team[]> = this.store.select(teamsSelectors.getAll);
  public whiteTeams: Observable<Team[]> = this.store.select(teamsSelectors.getWhite);
  public blackTeams: Observable<Team[]> = this.store.select(teamsSelectors.getBlack);

  constructor(private store: Store) { }
}
