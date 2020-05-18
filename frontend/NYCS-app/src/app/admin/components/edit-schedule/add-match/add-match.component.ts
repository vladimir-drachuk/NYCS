import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Team } from 'src/app/shared/models/team.model';
import { getAll } from 'src/app/redux/selectors/teams.selectors';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss']
})
export class AddMatchComponent {

  public teams: Observable<Team[]> = this.store.select(getAll);
  public isAddDisabled: boolean = true;
  @Input() team1: string;
  @Input() team2: string;

  constructor(public dialogRef: MatDialogRef<AddMatchComponent>, private store: Store) { }

  public onChangeSelects(): void {
    this.isAddDisabled = !(this.team1 && this.team2 && this.team1 !== this.team2);
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onAddClick(): void {
    this.dialogRef.close({
      team1: this.team1,
      team2: this.team2,
      team1ID: null,
      team2ID: null,
      team1Score: null,
      team2Score: null,
      isComplete: false,
      isOT: false,
      isKR: false,
      tourneyStatus: 'Regular',
      winner: null,
      loser: null
    });   
  }

}
