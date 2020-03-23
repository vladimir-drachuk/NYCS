import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

import { animations } from '../../../../animations';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  animations: animations.appear(1000)
})
export class MatchComponent implements OnInit {

  @Input() index;
  @HostBinding('@state') state = 'none';
  @HostBinding('@appear') true;


  constructor() { }

  ngOnInit(): void {
    console.log(this.index);
  }

  public change(): void {
    this.state === 'none' ? this.state = 'color' : this.state = 'none';
  }

}
