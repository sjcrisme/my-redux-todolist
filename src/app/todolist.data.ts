import { todos } from './modal/todos.modal';
import { authour } from './modal/authour.modal';

export let todosListData: [todos] = [
  { id: 1, message: 'Hello one ', authour: 1, price: 1 },
  { id: 2, message: 'Buy me one ', authour: 1, price: 3 },
  { id: 3, message: 'Gofor the work one ', authour: 3, price: 10 },
  { id: 5, message: 'feed the fish ', authour: 3, price: 5 },
  { id: 6, message: 'test this app ', authour: 2, price: 2 },
];

export let authours: [authour] = [
  { id: 1, name: 'admin' },
  { id: 2, name: 'user' },
  { id: 3, name: 'tester' }
];