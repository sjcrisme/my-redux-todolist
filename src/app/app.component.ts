import { Component } from '@angular/core';
import { todos } from './todos.modal';

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
}
