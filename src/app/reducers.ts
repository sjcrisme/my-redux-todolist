import * as fromtodos from './todo.reducer';

export interface State {
  search: fromtodos.State;
}

export const reducers = {
  search: fromtodos.reducer
};

export function selectResultsCount(state: State) {
   return state.search.checkedId.length;
}

export function selectedTodo(state: State) {
  return state.search.selected;
}

export function checkedIds(state: State) {
  return state.search.checkedId;
}

export function getTodosSelected(state: State) {
  return   state.search.checkedId.map(item => {
    console.log(item);
    return {
      id: 1,
      message: 'string',
      authour: 0,
      price: 2
    }
  });
}