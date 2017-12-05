import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { todos } from './../todos.modal';
import * as TodoActions from './../todo.actions';
import * as fromRoot from './../reducers';
import { todosListData } from './../todolist.data';
import _ from 'lodash';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {
  mcheckbox: Observable<number[]>;
  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.mcheckbox = store.select((state) => state.search.checkedId);
  }

  ngOnInit() {
  }

}
