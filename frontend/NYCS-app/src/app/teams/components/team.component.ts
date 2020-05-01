import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DbService } from '../../shared/services/db.service';
import { Team } from '../../shared/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team: Team;
  public teams: Team[] = [];

  constructor(private db: DbService, private route: ActivatedRoute, private router: Router) {
    this.db.teams.subscribe((teams) => this.teams = teams);
    this.route.params.subscribe((params) => {
      this.team = this.teams.find(team => team.teamtag === params.teamtag);
    });
    if (!this.team) { this.router.navigateByUrl('error'); }
  }

  ngOnInit(): void {

  }

}
