import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { todos } from './todos.modal';
import * as TodoActions from './todo.actions';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 public todos: [todos] = [
    { id: 1, message: 'Hello one ', 'authour': 'admin', price: 1 },
    { id: 2, message: 'Buy me one ', 'authour': 'admin', price: 3 },
    { id: 3, message: 'Gofor the work one ', 'authour': 'test', price: 10 },
  ];

  constructor(
    private store: Store<fromRoot.State>
  ) { }

 onClick(todoItem: number ) {
   //console.log(todoItem);
   this.store.dispatch(new TodoActions.Selected(todoItem));
 }
 onCheck(event: Event,item: any){
   console.log(event.target.checked,item);
   
 }
}
