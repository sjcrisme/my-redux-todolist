import { todos } from './todos.modal';
import * as TodoAction from './todo.actions';
import _ from "lodash";
import { todosListData } from './todolist.data';

export  interface State {
  posts: todos[];
  selectedId: number[];
  checkedId: number[];
}

const initialState: State = {
 posts: todosListData,
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

    case TodoAction.MARKALL:{
      return {
        ...state,
        checkedId: _.filter(state.posts, function(item){
          return item.id;
        });
      }
    }

    default: {
      return state;
    }
  }
}
