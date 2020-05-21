import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { FromExcelComponent } from './from-excel/from-excel.component';
import { Match } from 'src/app/shared/models/match.model';
import { getRegular } from 'src/app/redux/selectors/matches.selectors';
import { AddMatchComponent } from './add-match/add-match.component';
import { changeShedule } from 'src/app/redux/actions/matches.actions';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.scss']
})
export class EditScheduleComponent implements OnInit {

  public matches: Match[]; 
  public paginatorPage: number = 1;
  public maxSize: number = 5;
  public itemsPerPageOptions: number[] = [5, 10, 15, 20];
  public itemsPerPage: number = this.itemsPerPageOptions[1];

  constructor(private dialogRef: MatDialogRef<EditScheduleComponent>,
              private dialog: MatDialog,
              private store: Store) { }

  ngOnInit(): void {
    this.store.select(getRegular).subscribe((matches: Match[]) => {
      this.matches = [...matches];
    });
  }

  public getPaginatorStart(): number {
    return  this.matches.length === 0 ? 0 : (this.paginatorPage - 1) * this.itemsPerPage + 1
  }

  public getPaginatorEnd(maxValue: number): number {
    const maxAmount = this.paginatorPage * this.itemsPerPage;
    return maxAmount > maxValue ? maxValue : maxAmount
  }

  public openFromExcel(): void {
    const dialogRef = this.dialog.open(FromExcelComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((matches: Match[]) => {
      if (matches) matches.forEach((match) => this.matches.push(match))
    })
  }

  public addMatch() : void {
    const dialogRef = this.dialog.open(AddMatchComponent, {
      width: '460px',
    });
    dialogRef.afterClosed().subscribe((match: Match) => {
      if (match) this.matches.push(match)
    })
  }

  public clearSchedule(): void {
    this.matches.splice(0, this.matches.length);
  }

  public deleteMatch(match: Match): void {
    this.matches.splice(this.matches.indexOf(match), 1);  
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onYesClick(): void {
    const yes = confirm('Do you really want to change tourney schedule?');
    if (yes) {
      this.store.dispatch(changeShedule({ payload: this.matches }));
    } 
    this.dialogRef.close();    
  }
}
