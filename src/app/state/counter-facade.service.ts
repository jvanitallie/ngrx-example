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
    // TODO: Wire this up to use ngRx to reset the state to the initial state
  }

  public setValue(val: number): void {
    this.store.dispatch(counterActions.setvalue({ newValue: val }));
    // TODO: Wire this up to pass the value passed in to the state for the current counter value
  }

  public loadValue(): void {
    this.store.dispatch(counterActions.loadvalue());
    // TODO: Wire this up so that the current counter value is loaded from the counter service
  }
}
