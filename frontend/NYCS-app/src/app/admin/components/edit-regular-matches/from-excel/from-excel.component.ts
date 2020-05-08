import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-from-excel',
  templateUrl: './from-excel.component.html',
  styleUrls: ['./from-excel.component.scss']
})
export class FromExcelComponent {

  constructor(public dialogRef: MatDialogRef<FromExcelComponent>) { }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onLoadClick(text: string): void {
    console.log(text.split('\u000A').map(item => item.split('\u0009')));
      console.log('Apply...');
    this.dialogRef.close();   
  }
}
