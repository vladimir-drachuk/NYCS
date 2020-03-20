import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { teams } from '../../../temporary storage/teams';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.team = teams.find(team => team.id === params.id);
    });
    if (!this.team) { this.router.navigateByUrl('error'); }
  }

  ngOnInit(): void {

  }

}
