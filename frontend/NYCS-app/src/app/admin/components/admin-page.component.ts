import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { EditRegularMatchesComponent } from './edit-regular-matches/edit-regular-matches.component';
import { Match } from '../../shared/models/match.model';
import * as matchesSelectors from '../../redux/selectors/matches.selectors'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  public matches: Observable<Match[]> = this.store.select(matchesSelectors.getAll);

  constructor(public dialog: MatDialog, private store: Store) { };

  public openEditSchedule(): void {
    this.dialog.open(EditRegularMatchesComponent, {
      width: '50%',
    });
  }

  public show() {
    const sbsc = this.matches.subscribe(matches => console.log(matches));
    sbsc.unsubscribe();
  }
}
