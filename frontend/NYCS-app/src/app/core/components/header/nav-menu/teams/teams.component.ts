import { Component } from '@angular/core';

import { Team } from '../../../../../shared/models/team.model';
import { DbService } from '../../../../../shared/services/db.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  public teams: Team[] = [];
  public whiteTeams: Team[] = [];
  public blackTeams: Team[] = [];

  constructor(private db: DbService) {
    this.db.teams.subscribe((items: Team[]) => {
      this.teams = items;
      this.whiteTeams = this.teams.filter((team) => team.half === 'white');
      this.blackTeams = this.teams.filter((team) => team.half === 'black');
    });
  }
  
}
