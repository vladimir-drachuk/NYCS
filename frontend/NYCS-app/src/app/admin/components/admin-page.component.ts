import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { Match } from '../../shared/models/match.model';
import * as matchesSelectors from '../../redux/selectors/matches.selectors'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  public matches: Observable<Match[]> = this.store.select(matchesSelectors.getAll);

  constructor(public dialog: MatDialog, private store: Store) { };

  public openEditSchedule(): void {
    this.dialog.open(EditScheduleComponent, {
      width: '60%',
      height: '90%'
    });
  }

  public show() {
    const sbsc = this.matches.subscribe(matches => console.log(matches));
    sbsc.unsubscribe();
  }
}
