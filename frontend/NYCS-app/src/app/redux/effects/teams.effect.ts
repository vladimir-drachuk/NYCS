import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DbService } from '../../shared/services/db.service';
import { teamsActionType } from '../actions/teams.actions';
import { StatsTeam } from 'src/app/shared/models/team.model';
 
@Injectable()
export class TeamsEffects {
 
  loadTeams$ = createEffect(() => this.actions$.pipe( 
      ofType(teamsActionType.getTeams),
      mergeMap(() => this.db$.getAllTeams()
        .pipe(
            map(teams => ({ type: teamsActionType.getTeamsSuccess, payload: 
              { data: teams, isTeamsInit: true, isLoaded: true, isError: false } })),
            catchError(() => of({ type: teamsActionType.getTeamsError, payload: 
              { data: [], isTeamsInit: true, isLoaded: false, isError: true } }))
        ))
    )
  );

  updateState$ = createEffect(() => this.actions$.pipe( 
    ofType(teamsActionType.getOnlyStats),
    mergeMap(() => this.db$.getOnlyTeamStats()
      .pipe(
          map((stats: StatsTeam) => ({ type: teamsActionType.getOnlyStatsSuccess, payload: stats })),
          catchError(() => of({ type: teamsActionType.getOnlyStatsError }))
      ))
  )
);
 
  constructor(private actions$: Actions, private db$: DbService) { }
}