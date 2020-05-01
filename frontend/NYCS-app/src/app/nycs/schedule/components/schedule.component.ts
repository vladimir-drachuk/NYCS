import { Component, OnInit } from '@angular/core';

import { DbService } from '../../../shared/services/db.service';
import { Match } from '../../../shared/models/match.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public matches: Match[] = [];

  constructor(private db: DbService) {
    this.db.matches.subscribe((matches: Match[]) => {
      this.matches = matches});
  }

  ngOnInit(): void {
  }

}
