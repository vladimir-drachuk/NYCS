import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Team } from 'src/app/shared/models/team.model';
import { getAll } from 'src/app/redux/selectors/teams.selectors';

@Component({
  selector: 'app-from-excel',
  templateUrl: './from-excel.component.html',
  styleUrls: ['./from-excel.component.scss']
})
export class FromExcelComponent implements OnInit {

  public teams: Team[]

  constructor(public dialogRef: MatDialogRef<FromExcelComponent>, private store: Store) { }

  public ngOnInit(): void{
    this.store.select(getAll).subscribe((teams: Team[]) => this.teams = teams);
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public validateExcelData(data: string[][]): boolean {
    let result = true;
    data.forEach((dataRow: string[]) => {
      if (!(dataRow.length >= 2 
        && this.teams.find((team) => team.name === dataRow[0].trim())
        && this.teams.find((team) => team.name === dataRow[dataRow.length - 1].trim())
      )) result = false;
    });
    return result;
  };

  public onLoadClick(textarea: HTMLTextAreaElement): void {
    const data: string[][] = textarea.value.split('\u000A').map(item => item.split('\u0009'));
    if (this.validateExcelData(data)) {
      const returnMatches = data.map((dataRow: string[]) => ({
        team1: dataRow[0],
        team2: dataRow[dataRow.length - 1],
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
      }))
      this.dialogRef.close(returnMatches);
    } else {
      textarea.classList.add('invalid')
    }
  }

  public resetClass(textarea: HTMLTextAreaElement) {
    textarea.classList.remove('invalid');
  }
}
