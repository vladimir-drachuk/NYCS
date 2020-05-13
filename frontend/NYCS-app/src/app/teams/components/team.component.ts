import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

import { Team } from '../../shared/models/team.model';
import * as teamsSelectors from '../../redux/selectors/teams.selectors' 




@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  public team: Team;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
    this.route.params.pipe(
      switchMap(params => this.store.pipe(select(teamsSelectors.getByTag, { teamtag: params.teamtag }))
    ))
    .subscribe(team => this.team = team);
    
    if (!this.team) { this.router.navigateByUrl('error'); }
  }
}
