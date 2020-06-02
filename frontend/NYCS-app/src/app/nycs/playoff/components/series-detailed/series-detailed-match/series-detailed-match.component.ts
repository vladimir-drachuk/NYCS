import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';

@Component({
  selector: 'app-series-detailed-match',
  templateUrl: './series-detailed-match.component.html',
  styleUrls: ['./series-detailed-match.component.scss']
})
export class SeriesDetailedMatchComponent implements OnInit {

  @Input() match: Match

  constructor() { }

  ngOnInit(): void {
  }

}
