import { Component } from '@angular/core';

import { teams } from '../../../../../../temporary storage/teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  public teams = teams;
  public whiteTeams = teams.filter((team) => team.half === 'white');
  public blackTeams = teams.filter((team) => team.half === 'black');

}
