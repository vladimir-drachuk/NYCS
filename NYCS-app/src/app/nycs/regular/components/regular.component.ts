import { Component } from '@angular/core';

import { teams } from '../../../../temporary storage/teams';
import { animations } from '../../../animations'

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.scss'],
  animations: animations.opacity()
})
export class RegularComponent {

  public teams = teams;
  public whiteTeams = teams.filter((team) => team.half === 'white');
  public blackTeams = teams.filter((team) => team.half === 'black');

}
