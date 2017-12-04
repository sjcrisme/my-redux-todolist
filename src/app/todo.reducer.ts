import { todos } from './todos.modal';
import * as TodoAction from './todo.actions';

export  interface State {
  posts: todos[];
  selectedId: number[];
}

const initialState: State = {
 posts: [] ,
 selectedId: [],
};



export function reducer(state = initialState, action: TodoAction.All): State {
  switch ( action.type) {
    case TodoAction.LOAD: {  
      return {
        ...state,
        posts: action.payload
      };
    }

    case TodoAction.SELECTED: {
      return {
        ...state,
        selectedId: [action.payload]
      };
    }

    default: {
      return state;
    }
  }
}
