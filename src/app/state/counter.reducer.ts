import { Action, createReducer, on } from '@ngrx/store';
import * as counterActions from './counter.actions';

export interface CounterState {
  count: number;
}

export const featureKey = 'counter';

export const initialState: CounterState = { count: 0 };

// TODO: add the additional reducer functions to react to the appropriate actions
const _counterReducer = createReducer(
  initialState,
  on(counterActions.increment, state => ({ ...state, count: state.count + 1 })),
  on(counterActions.decrement, state => ({ ...state, count: state.count - 1 })),
  on(counterActions.reset, () => ( initialState )),
  on(counterActions.setvalue, (state, newValue) => ({ ...state, count: newValue.newValue}))
);

export function counterReducer(
  state: CounterState,
  action: Action | undefined
) {
  return _counterReducer(state, action);
}
