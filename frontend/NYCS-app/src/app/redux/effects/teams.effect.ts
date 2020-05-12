import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DbService } from '../../shared/services/db.service';
import { teamsActionType } from '../actions/teams.actions';
 
@Injectable()
export class TeamsEffects {
 
  loadTeams$ = createEffect(() => this.actions$.pipe( 
      ofType(teamsActionType.getTeams),
      mergeMap(() => this.db.getAllTeams()
        .pipe(
            map(teams => ({ type: teamsActionType.getTeamsSuccess, payload: teams })),
            catchError(() => of({ type: teamsActionType.getTeamsError, payload: [] }))
        ))
    )
  );
 
  constructor(private actions$: Actions, private db: DbService) { }
}