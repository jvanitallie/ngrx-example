import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CounterService } from '../services/counter.service';
import * as counterActions from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.loadvalue),
      mergeMap(action =>
        this.counterService
          .loadCounter()
          .pipe(map(response => counterActions.setvalue(response)))
      )
    )
  );
}
