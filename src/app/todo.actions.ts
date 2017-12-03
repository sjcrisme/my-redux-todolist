import { Action } from '@ngrx/store';
import {todos} from './todos.modal';

export const LOAD = '[Todo] LOAD';
export const SELECTED = '[Todo] SELECTED';

export class Load implements Action {
  readonly type = LOAD;
  constructor() {}
}

export class Selected implements Action {
  readonly type = SELECTED;
  constructor(public payload: todos) {}
}
export type All
  = Load | Selected;
