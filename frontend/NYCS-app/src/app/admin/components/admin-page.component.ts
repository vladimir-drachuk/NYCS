import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { Match } from '../../shared/models/match.model';
import { toPlayoffMode } from 'src/app/redux/actions/appstate.actions';
import * as matchesSelectors from '../../redux/selectors/matches.selectors';
import * as appstoreSelectors from '../../redux/selectors/appstore.selectors'; 


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  public matches: Observable<Match[]> = this.store.select(matchesSelectors.getAll);
  public isScheduleLoading: Observable<boolean> = this.store.select(matchesSelectors.isScheduleLoading);
  public isPlayoff: Observable<boolean> = this.store.select(appstoreSelectors.isPlayoff);

  constructor(public dialog: MatDialog, private store: Store) { };

  public openEditSchedule(): void {
    this.dialog.open(EditScheduleComponent, {
      width: '60%',
      height: '90%'
    });
  }

  public goToPlayoff(): void {
    this.store.dispatch(toPlayoffMode());
  }
}
