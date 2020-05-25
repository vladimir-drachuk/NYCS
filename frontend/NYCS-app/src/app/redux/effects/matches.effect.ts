import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { DbService } from '../../shared/services/db.service';
import { matchesActionType } from '../actions/matches.actions';
import { ActionPayload } from '../store';
import { Match } from 'src/app/shared/models/match.model';
import { teamsActionType } from '../actions/teams.actions';
import { UpdateTime } from 'src/app/shared/models/updateMatchTime';
import { appstateActionsType } from '../actions/appstate.actions';
import { seriesActionType } from '../actions/series.actions';
 
@Injectable()
export class MatchesEffects {
 
  loadMatches$ = createEffect(() => this.actions$.pipe(
    ofType(matchesActionType.getMatches),
    mergeMap(() => this.db$.getAllMatches()
      .pipe(
          map(matches => 
                ({ type: matchesActionType.getMatchesSuccess, payload: { data: matches, isLoaded: true, isError: false } })),
          catchError(() => of({ type: matchesActionType.getMatchesError, payload: { data: [], isLoaded: false, isError: true } }))
      )
    )
  ));
  
  updateMatch$ = createEffect(() => this.actions$.pipe(
    ofType(matchesActionType.updateMatch),
    mergeMap((match: ActionPayload<Match>) => this.db$.updateMatch(match.payload)
      .pipe(
        switchMap(() => of({ type: matchesActionType.updateMatchSuccess },
                           { type: teamsActionType.getTeams },
                           { type: matchesActionType.getMatches },
                           { type: seriesActionType.getSeries })),
        catchError(() => of({ type: matchesActionType.updateMatchError }))
      )  
    )
  ));

  updateTime$ = createEffect(() => this.actions$.pipe(
    ofType(matchesActionType.updateTime),
    mergeMap((match: ActionPayload<UpdateTime>) => this.db$.updateTime(match.payload)
      .pipe(
        switchMap(() => of({ type: matchesActionType.updateMatchSuccess },
                           { type: matchesActionType.getMatches })),
        catchError(() => of({ type: matchesActionType.updateMatchError }))
      )  
    )
  ));

  changeSchedule$ = createEffect(() => this.actions$.pipe(
    ofType(matchesActionType.changeShedule),
    mergeMap((matches: ActionPayload<Match[]>) => this.db$.createSchedule(matches.payload)
      .pipe(
        switchMap(() => of({ type: matchesActionType.changeSheduleSuccess },
                           { type: teamsActionType.getTeams },
                           { type: matchesActionType.getMatches })),
        catchError(() => of({ type: matchesActionType.changeSheduleError }))
      )
    )
  ));

  toPlayoffMode$ = createEffect(() => this.actions$.pipe(
    ofType(appstateActionsType.toPlayoffMode),
    mergeMap(() => this.db$.goToPlayoffNextRound('Semi-Finals')
      .pipe(
        switchMap(() => of({ type: appstateActionsType.playoffModeActivate },
                           { type: matchesActionType.getMatches })),
        catchError(() => of({ type: appstateActionsType.playoffModeError }))
      )
    )
  ));

  destroyPlayoff$ = createEffect(() => this.actions$.pipe(
    ofType(appstateActionsType.toRegularChampMode),
    mergeMap(() => this.db$.deleteSeries('Semi-Finals')
      .pipe(
        switchMap(() => of({ type: appstateActionsType.regularChampModeActivate },
                           { type: matchesActionType.getMatches })),
        catchError(() => of({ type: appstateActionsType.regularChampModeError }))
      )
    )
  ));

  toHalfFinals$ = createEffect(() => this.actions$.pipe(
    ofType(appstateActionsType.toHalfFinals),
    mergeMap(() => this.db$.goToPlayoffNextRound('Half-Finals')
      .pipe(
        switchMap(() => of({ type: appstateActionsType.toHalfFinalsSuccess },
                           { type: matchesActionType.getMatches })),
        catchError(() => of({ type: appstateActionsType.toHalfFinalsError }))
      )
    )
  ));

  destroyHalfFinals$ = createEffect(() => this.actions$.pipe(
    ofType(appstateActionsType.destroyHalfFinals),
    mergeMap(() => this.db$.deleteSeries('Half-Finals')
      .pipe(
        switchMap(() => of({ type: appstateActionsType.destroyHalfFinalSuccess },
                           { type: matchesActionType.getMatches })),
        catchError(() => of({ type: appstateActionsType.destroyHalfFinalError }))
      )
    )
  ));

  toHYCSFinals$ = createEffect(() => this.actions$.pipe(
    ofType(appstateActionsType.toNYCSFinals),
    mergeMap(() => this.db$.goToPlayoffNextRound('NYCS Finals')
      .pipe(
        switchMap(() => of({ type: appstateActionsType.toNYCSFinalsSuccess },
                           { type: matchesActionType.getMatches })),
        catchError(() => of({ type: appstateActionsType.toNYCSFinalsError }))
      )
    )
  ));

  destroyNYCSFinals$ = createEffect(() => this.actions$.pipe(
    ofType(appstateActionsType.destroyNYCSFinals),
    mergeMap(() => this.db$.deleteSeries('NYCS Finals')
      .pipe(
        switchMap(() => of({ type: appstateActionsType.destroyNYCSFinalSuccess },
                           { type: matchesActionType.getMatches })),
        catchError(() => of({ type: appstateActionsType.destroyNYCSFinalError }))
      )
    )
  ));

  constructor(private actions$: Actions, private db$: DbService) { }
}