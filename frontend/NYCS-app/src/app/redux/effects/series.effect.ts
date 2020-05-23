import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { DbService } from '../../shared/services/db.service';
import { seriesActionType } from '../actions/series.actions';
import { appstateActionsType } from '../actions/appstate.actions';
 
@Injectable()
export class SeriesEffects {
 
  loadSeries$ = createEffect(() => this.actions$.pipe( 
      ofType(seriesActionType.getSeries),
      mergeMap(() => this.db$.getAllSeries()
        .pipe(
            switchMap(series => of({ type: seriesActionType.getSeriesSuccess, payload: { data: series, isLoaded: true, isError: false } },
                                   { type: appstateActionsType.initTourneyStatus, payload: series })),
            catchError(() => of({ type: seriesActionType.getSeriesError, payload: { data: [], isLoaded: false, isError: true } }))
        ))
    )
  );
 
  constructor(private actions$: Actions, private db$: DbService) { }
}