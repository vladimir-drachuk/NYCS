import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { FromExcelComponent } from './from-excel/from-excel.component';

@Component({
  selector: 'app-edit-regular-matches',
  templateUrl: './edit-regular-matches.component.html',
  styleUrls: ['./edit-regular-matches.component.scss']
})
export class EditRegularMatchesComponent {

  constructor(public dialogRef: MatDialogRef<EditRegularMatchesComponent>, public dialog: MatDialog) {
  }

  public openFromExcel(): void {
    this.dialog.open(FromExcelComponent, {
      width: '300px',
      position: {
        right: '20px',
      }
    });
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onYesClick(): void {
    const yes = confirm('Do you really want to change tourney schedule?');
    if (yes) {
      console.log('Apply...');
    } 
    this.dialogRef.close();    
  }
}
