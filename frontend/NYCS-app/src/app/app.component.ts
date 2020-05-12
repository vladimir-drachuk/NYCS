import { Component } from '@angular/core';

import { animations } from './animations';

import { Store } from '@ngrx/store';
import { getTeamsAction } from './redux/actions/teams.actions';
import { getMatchesAction } from './redux/actions/matches.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: animations.opacity()
})
export class AppComponent {

  constructor(private store: Store) { 
    this.initStore(); 
  } 

  private initStore(): void {
    this.store.dispatch(getTeamsAction());
    this.store.dispatch(getMatchesAction());
  }
}
