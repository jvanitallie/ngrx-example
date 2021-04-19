import { createAction, props } from "@ngrx/store";

enum CounterActionTypes {
  INCREMENT = "[Counter Component] Increment",
  DECREMENT = "[Counter Component] Decrement",
  RESET = "[Counter Component] Reset",
  SETVALUE = "[Counter Component] Set Value",
  LOADVALUE = "[Counter API] Load Value"
}

export const increment = createAction(CounterActionTypes.INCREMENT);
export const decrement = createAction(CounterActionTypes.DECREMENT);
export const reset = createAction(CounterActionTypes.RESET);
export const setvalue = createAction(CounterActionTypes.SETVALUE, props<{newValue: number}>());
export const loadvalue = createAction(CounterActionTypes.LOADVALUE);
