import { Component, OnInit, Input } from '@angular/core';

import { Match } from '../../../shared/models/match.model';

@Component({
  selector: 'app-admin-match',
  templateUrl: './admin-match.component.html',
  styleUrls: ['./admin-match.component.scss']
})
export class AdminMatchComponent implements OnInit {

  @Input() match: Match;
  public overTime: boolean;

  constructor() { }

  ngOnInit(): void {
    this.overTime = this.match.isOT || this.match.isKR;
  }

  public showOT(): string {
    let result = '';
    if (this.overTime) result = (this.match.isKR) ? 'KR' : 'OT';
    return result
  }

  public mouseOver(event): void {
    const { target } = event
    const form = target.closest('.form');
    form.classList.add('focus');
  }

  public mouseOut(event): void {
    const { target } = event
    const form = target.closest('.form');
    form.classList.remove('focus');
  }

}
