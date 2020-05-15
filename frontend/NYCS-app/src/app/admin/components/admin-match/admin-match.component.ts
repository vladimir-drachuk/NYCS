import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { Match } from '../../../shared/models/match.model';
import { isEditMode } from '../../../redux/selectors/appstore.selectors';
import { editMode, regularMode } from '../../../redux/actions/appstore.actions';
import { updateMatch } from 'src/app/redux/actions/matches.actions';

@Component({
  selector: 'app-admin-match',
  templateUrl: './admin-match.component.html',
  styleUrls: ['./admin-match.component.scss']
})
export class AdminMatchComponent implements OnInit, OnDestroy {

  @Input() match: Match;
  @ViewChild('team1', { static: false }) public team1Score: ElementRef;
  @ViewChild('team2', { static: false }) public team2Score: ElementRef;

  private subscriber; 
  public isEditMode: boolean;
  public isEditMatch: boolean;
  public isFocused: boolean;
  public overTime: boolean;
  public isScore1invalid: boolean;
  public isScore2invalid: boolean;
  public isTeam1disabled: boolean = true;
  public isTeam2disabled: boolean = true;

  constructor(private store: Store) { }

  private gotoEditMode(): void {
    this.isEditMatch = true;
    this.store.dispatch(editMode());
    this.isTeam1disabled = false;
    this.isTeam2disabled = false;
  }

  private gotoRegularMode(): void {
    this.isEditMatch = false;
    this.store.dispatch(regularMode());
    this.isTeam1disabled = true;
    this.isTeam2disabled = true;
  }

  private isValid(value: string): boolean {
    console.log()
    return !Number.isNaN(+value);
  }

  public ngOnInit(): void {
    this.overTime = this.match.isOT || this.match.isKR;
    this.subscriber = this.store.select(isEditMode).subscribe(isEdit => this.isEditMode = isEdit);
  }

  public showOTinMatch(): string {
    let result = '';
    if (this.overTime) result = (this.match.isKR) ? 'KR' : 'OT';
    return result
  }
  
  public getEditMode(): void {
    if (!this.isEditMode) {
      this.gotoEditMode();
    }
  }

  public getClearMatch(): void {
    console.log('clear');
  }

  public getDeleteMatch(): void {
    console.log('delete');
  }

  public applyChangeMatch(): void {
    const score1 = this.team1Score.nativeElement.value;
    const score2 = this.team2Score.nativeElement.value;
    if (this.isValid(score1) && this.isValid(score2)){
      this.gotoRegularMode();
      this.isScore1invalid = false;
      this.isScore2invalid = false;
      this.store.dispatch(updateMatch({ 
        payload: {
          ...this.match,
          team1Score: score1.trim() === '' ? null : +score1,
          team2Score: score2.trim() === '' ? null : +score2 
        }
      }));
    } else {
        if (!this.isValid(score1)) this.isScore1invalid = true;
        if (!this.isValid(score2)) this.isScore2invalid = true;
    }
  }

  public cancelChangeMatch(): void {
    this.gotoRegularMode()
    this.isScore1invalid = false;
    this.isScore2invalid = false;
    this.team1Score.nativeElement.value = this.match.team1Score;
    this.team2Score.nativeElement.value = this.match.team2Score;
  }

  public ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
