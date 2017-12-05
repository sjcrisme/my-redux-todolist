import { Component, state } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { todos } from './todos.modal';
import * as TodoActions from './todo.actions';
import * as fromRoot from './reducers';
import { todosListData } from './todolist.data';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count: Observable<number>;
  //mcheckbox: Observable<number[]>;

 public todos: [todos] = todosListData;

  constructor(
    private store: Store<fromRoot.State>
  ) {
   // this.mcheckbox = store.select((state) => state.search.checkedId);
    this.count = store.select((state) => state.search.checkedId.length);
  }

 onClick(todoItem: number ) {
   //console.log(todoItem);
   this.store.dispatch(new TodoActions.Selected(todoItem));
 }

 onCheck(event: Event, item: number) {
   if (!(<HTMLInputElement>event.target).checked) {
    this.store.dispatch(new TodoActions.UnChecked(item));
   }
   else {
    this.store.dispatch(new TodoActions.Checked(item));
   }
   console.log((<HTMLInputElement>event.target).checked, item);
   }

 onClickButton() {
  const onlyID: [number] = _.map(this.todos, (item) => item.id);
  this.store.dispatch(new TodoActions.MarkAll(onlyID));
 }

}
