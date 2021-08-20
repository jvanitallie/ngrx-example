import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterActions from '../state/counter.actions';
import * as counterSelectors from '../state/counter.selectors';
import { CounterState } from './counter.reducer';

@Injectable()
export class CounterFacadeService {
  constructor(private store: Store<CounterState>) {}

  public getCount(): Observable<number> {
    return this.store.pipe(select(counterSelectors.selectCounterValue));
  }

  public incrementCount(): void {
    this.store.dispatch(counterActions.increment());
  }

  public decrementCount(): void {
    this.store.dispatch(counterActions.decrement());
  }

  public resetCount(): void {
    this.store.dispatch(counterActions.reset());
  }

  public setValue(val: number): void {
    this.store.dispatch(counterActions.setvalue({newValue:val}));
  }

  public loadValue(): void {
    this.store.dispatch(counterActions.loadvalue());
  }
}
