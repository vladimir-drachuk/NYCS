import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DbService } from '../../shared/services/db.service';
import { matchesActionType } from '../actions/matches.actions';
 
@Injectable()
export class MatchesEffects {
 
  loadMatches$ = createEffect(() => this.actions$.pipe(
      ofType(matchesActionType.getMatches),
      mergeMap(() => this.db.getAllMatches()
        .pipe(
            map(matches => {
                console.log(matches);
                return { type: matchesActionType.getMatchesSuccess, payload: matches }}),
            catchError(() => of({ type: matchesActionType.getMatchesError, payload: [] }))
        ))
    )
  );
 
  constructor(private actions$: Actions, private db: DbService) { }
}