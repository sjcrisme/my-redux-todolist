import * as fromtodos from './todo.reducer';

export interface State {
  search: fromtodos.State;
}

export const reducers = {
  search: fromtodos.reducer
};

// export function selectResults(state: State) {
//   return state.search.results;
// }

// export function selectCount(state: State) {
//   return state.search.results.length;
// }

// export function selectTerms(state: State) {
//   return state.search.searchTerms;
// }
