import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  @Effect()
  selectTodo$: Observable<Action> = this.actions$
    .ofType(TodoActions.SELECTED)
    .map((action: TodoActions.Selected) => {
      console.log('Effects select',action.payload);
      return new TodoActions.SelectedSuccessed();
    });

  checkTodo$: Observable<Action> = this.actions$  
    .ofType(TodoActions.CHECKED)
    .map((action: TodoActions.Checked) => {
      console.log('Effects cheked',action.payload);
      return new TodoActions.SelectedSuccessed();
    });

  uncheckTodo$: Observable<Action> = this.actions$
    .ofType(TodoActions.UNCHECKED)
    .map((action: TodoActions.UnChecked) => {
      console.log('Effects uncheck',action.payload);
      return new TodoActions.SelectedSuccessed();
    }); 
    // .switchMap(terms => this.booksService.searchBooks(terms))
     //.map(results => new TodoActions.SearchSuccess(results));
    
  constructor(
    private actions$: Actions,
  ) {}
}