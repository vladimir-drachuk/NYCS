import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Match } from '../../../shared/models/match.model';
import { isEditMode } from '../../../redux/selectors/appstore.selectors';
import { editMode, regularMode } from '../../../redux/actions/appstore.actions';

@Component({
  selector: 'app-admin-match',
  templateUrl: './admin-match.component.html',
  styleUrls: ['./admin-match.component.scss']
})
export class AdminMatchComponent implements OnInit, OnDestroy {

  @Input() match: Match;

  private subscriber; 
  public isEditMode: boolean;
  public isEditMatch: boolean;
  public isFocused: boolean;
  public overTime: boolean;
  public isTeam1disabled: boolean = false;
  public isTeam2disabled: boolean = false;
  public team1Score: number;
  public team2Score: number;

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
      this.match.team2Score = 66;
      this.team1Score = this.match.team1Score;
      this.team2Score = this.match.team2Score;
    }
  }

  public getClearMatch(): void {
    console.log('clear');
  }

  public getDeleteMatch(): void {
    console.log('delete');
  }

  public applyChangeMatch(): void {
    this.gotoRegularMode();
    
  }

  public cancelChangeMatch(): void {
    this.gotoRegularMode()
    this.match.team1Score = this.team1Score;
    this.match.team2Score = this.team2Score;
  }

  public ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
