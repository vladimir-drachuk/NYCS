import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';

@Component({
  selector: 'app-series-match',
  templateUrl: './series-match.component.html',
  styleUrls: ['./series-match.component.scss']
})
export class SeriesMatchComponent implements OnInit {

  @Input() match: Match

  constructor() { }

  ngOnInit(): void {
  }

}
