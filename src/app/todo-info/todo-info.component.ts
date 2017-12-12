import { Component, Input, OnInit } from '@angular/core';

// import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
// import { Actions, Effect, OnRunEffects, EffectNotification } from '@ngrx/effects';

// import { todos } from './../modal/todos.modal';
// import * as TodoActions from './../todo.actions';
// import * as fromRoot from './../reducers';
// import { todosListData } from './../todolist.data';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {
  //todoData: Observable<todos>;
  @Input() todo;
  constructor(){//private store: Store<fromRoot.State>) { 
    //this.todoData = store.select(fromRoot.selectedTodo);
  }

  ngOnInit() {
  }

}
