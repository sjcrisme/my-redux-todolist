import { todos } from './todos.modal';
import * as TodoAction from './todo.actions';
import _ from "lodash";

export  interface State {
  posts: todos[];
  selectedId: number[];
  checkedId: number[];
}

const initialState: State = {
 posts: [] ,
 selectedId: [],
 checkedId:[]
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

    case TodoAction.CHECKED: {
      return {
        ...state,
        checkedId: [...state.checkedId, action.payload]
      };
    }

    case TodoAction.UNCHECKED: {
      //state.checkedId
      return {
        ...state,
        checkedId: _.filter(state.checkedId,function(item){
          if(item != action.payload){
              return item;
          }
        })
      };
    }

    default: {
      return state;
    }
  }
}
