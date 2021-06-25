import { Action, createReducer, on } from '@ngrx/store';
import * as counterActions from './counter.actions';

export interface CounterState {
  count: number;
}

export const featureKey = 'counter';

export const initialState: CounterState = { count: 0 };
const minCount: number = 0;
const maxCount: number = 10000;

// TODO: add the additional reducer functions to react to the appropriate actions
const _counterReducer = createReducer(
  initialState,
  on(counterActions.increment, state => ({
    ...state,
    count: state.count + 1 > maxCount ? maxCount : state.count + 1
  })),
  on(counterActions.decrement, state => ({
    ...state,
    count: state.count - 1 < minCount ? minCount : state.count - 1
  })),
  on(counterActions.reset, () => initialState),
  on(counterActions.setvalue, (state, newValue) => ({
    ...state,
    count:
      newValue.newValue < minCount
        ? minCount
        : newValue.newValue > maxCount
        ? maxCount
        : newValue.newValue
  }))
);

export function counterReducer(
  state: CounterState,
  action: Action | undefined
) {
  return _counterReducer(state, action);
}
