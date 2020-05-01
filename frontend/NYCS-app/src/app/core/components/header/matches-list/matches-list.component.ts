import { Component, OnInit, Input } from '@angular/core';

import { Match } from '../../../../shared/models/match.model';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {

  @Input() match: Match;

  constructor() { }

  ngOnInit(): void {
  }

}
