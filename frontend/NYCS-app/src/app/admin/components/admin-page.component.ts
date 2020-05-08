import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditRegularMatchesComponent } from './edit-regular-matches/edit-regular-matches.component';
import { DbService } from '../../shared/services/db.service';
import { Match } from '../../shared/models/match.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  public matches: Match[] = [];

  constructor(public dialog: MatDialog, private db: DbService) {
    this.db.matches.subscribe(matches => this.matches = matches)
  };

  public openEditSchedule(): void {
    this.dialog.open(EditRegularMatchesComponent, {
      width: '50%',
    });
  }

  public show() {
    console.log(this.matches);
  }
}
