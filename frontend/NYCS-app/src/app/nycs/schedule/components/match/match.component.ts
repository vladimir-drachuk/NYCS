import { Component, OnInit, Input } from '@angular/core';

import { Match } from '../../../../shared/models/match.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  @Input() match: Match;

  constructor() {
  }

  ngOnInit(): void {
  }
}
