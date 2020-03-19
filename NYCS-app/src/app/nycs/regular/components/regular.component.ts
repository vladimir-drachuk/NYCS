import { Component } from '@angular/core';

import { teams } from '../../../../temporary storage/teams';

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.scss']
})
export class RegularComponent {

  public teams = teams;
  public whiteTeams = teams.filter((team) => team.half === 'white');
  public blackTeams = teams.filter((team) => team.half === 'black');

}
