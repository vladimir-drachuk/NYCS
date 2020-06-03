import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';

@Component({
  selector: 'app-series-detailed-match-group',
  templateUrl: './series-detailed-match-group.component.html',
  styleUrls: ['./series-detailed-match-group.component.scss']
})
export class SeriesDetailedMatchGroupComponent implements OnInit {

  @Input() matches: Match[]

  constructor() { }

  ngOnInit(): void {
  }

}
