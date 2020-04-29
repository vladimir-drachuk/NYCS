import { Component } from '@angular/core';

import { teams } from '../../../../temporary storage/teams';
import { Team } from '../../../shared/models/team.model';
import { animations } from '../../../animations';
import { DbService } from '../../../shared/services/db.service'

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.scss'],
  animations: animations.opacity()
})
export class RegularComponent {

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
