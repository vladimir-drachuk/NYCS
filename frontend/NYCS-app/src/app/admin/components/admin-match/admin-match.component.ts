import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';

import { Match } from '../../../shared/models/match.model';
import { isEditMode } from '../../../redux/selectors/appstore.selectors';
import { editMode, regularMode } from '../../../redux/actions/appstore.actions';
import { updateMatch, updateTime } from 'src/app/redux/actions/matches.actions';
import { isMatchLoading } from 'src/app/redux/selectors/matches.selectors';

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
  public isLoadingMode: Observable<boolean> = this.store.select(isMatchLoading);
  public overTime: boolean;
  public isScore1invalid: boolean;
  public isScore2invalid: boolean;
  public isTeam1disabled: boolean = true;
  public isTeam2disabled: boolean = true;

  constructor(private store: Store) { }
  
  ngOnInit(): void {
    this.overTime = this.match.isOT || this.match.isKR;
    this.subscriber = this.store.select(isEditMode).subscribe(isEdit => this.isEditMode = isEdit);
  }

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
    return !Number.isNaN(+value);
  }

  public getRandomInt(max): number {
  return Math.floor(Math.random() * Math.floor(max));
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
    this.store.dispatch(updateMatch({ 
      payload: {
        ...this.match,
        team1Score: null,
        team2Score: null,
        isOT: false,
        isKR: false,
      }
    }));
  }

  public getRandomMatch(): void {
    const score1: number = this.getRandomInt(24);
    const score2: number = 24 - score1;
    this.store.dispatch(updateMatch({ 
      payload: {
        ...this.match,
        team1Score: score1,
        team2Score: score2,
        isOT: false,
        isKR: false,
      }
    }));
  }

  public changeTime(value: string): void {
    this.store.dispatch(updateTime({
      payload: {
        matchID: this.match._id,
        time: value
      }
    }))
  }


  public applyChangeMatch(): void {
    const score1: string = this.team1Score.nativeElement.value;
    const score2: string = this.team2Score.nativeElement.value;
    if (this.isValid(score1) && this.isValid(score2)){
      this.isScore1invalid = false;
      this.isScore2invalid = false;
      this.store.dispatch(updateMatch({ 
        payload: {
          ...this.match,
          team1Score: score1.trim() === '' ? null : +score1,
          team2Score: score2.trim() === '' ? null : +score2 
        }
      }));
      this.gotoRegularMode();
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

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
