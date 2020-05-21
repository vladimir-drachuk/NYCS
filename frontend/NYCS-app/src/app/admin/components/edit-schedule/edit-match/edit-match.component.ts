import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Match } from 'src/app/shared/models/match.model';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.scss']
})
export class EditMatchComponent implements OnInit {

  @Input() public match: Match;
  @Output() public remove: EventEmitter<Match> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public deleteMatch(): void {
    this.remove.emit(this.match);
  } 
}
