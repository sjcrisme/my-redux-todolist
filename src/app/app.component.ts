import { Component, state } from '@angular/core';
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
  count:Observable<number>;

 public todos: [todos] = [
    { id: 1, message: 'Hello one ', authour: 'admin', price: 1 },
    { id: 2, message: 'Buy me one ', authour: 'admin', price: 3 },
    { id: 3, message: 'Gofor the work one ', authour: 'test', price: 10 },
    { id: 5, message: 'feed the fish ', authour: 'test', price: 5 },
    { id: 6, message: 'test this app ', authour: 'user', price: 2 },
  ];

  constructor(
    private store: Store<fromRoot.State>
  ) {

    this.count = store.select((state)=>state.search.checkedId.length);
  }

 onClick(todoItem: number ) {
   //console.log(todoItem);
   this.store.dispatch(new TodoActions.Selected(todoItem));
 }
 onCheck(event: Event,item: number){
   if(!event.target.checked){
    this.store.dispatch(new TodoActions.UnChecked(item)); 
   }
   else{
    this.store.dispatch(new TodoActions.Checked(item));
   }
    
   console.log(event.target.checked, item);
   
 }
}
