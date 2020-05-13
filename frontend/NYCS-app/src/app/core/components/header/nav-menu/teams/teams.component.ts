import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Team } from '../../../../../shared/models/team.model';
import * as teamsSelectors from '../../../../../redux/selectors/teams.selectors';



@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  public whiteTeams: Observable<Team[]> = this.store.select(teamsSelectors.getWhite);
  public blackTeams: Observable<Team[]> = this.store.select(teamsSelectors.getBlack);

  constructor(private store: Store) { }
}

