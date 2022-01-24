import { Action, createReducer, on } from "@ngrx/store";
import { DECREMENTAR, INCREMENTAR, RESET } from "./contador.actions";

export const initialState = 100;

const _contadorReducer = createReducer(
  initialState,
  on(INCREMENTAR, (state) => state + 1),
  on(DECREMENTAR, (state) => state - 1),
  on(RESET, (state) => 0)
);

export function contadorReducer(state : any, action: Action) {
return _contadorReducer(state,action);

}
