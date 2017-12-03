import { Todo } from './todos.modal';
import * as TodoAction from './todo.actions';

export  interface State {
  selectedid: [number];
}

const initialState: State = {
 selectedid: [];
};
//
// export function reducer(state = initialState, action: AuthActions.All): State {
//   switch ( action.type) {
//     case AuthActions.LOGIN: {
//       return {
//         ...state,
//         userInput: action.payload
//       };
//     }
//
//     case AuthActions.LOGIN_SUCCESS: {
//       return {
//         ...state,
//         result: action.payload
//       };
//     }
//
//     case AuthActions.RESET_PASSWORD: {
//       return {
//         ...state,
//         userInput: action.payload
//       };
//     }
//
//     case AuthActions.RESET_PASSWORD_SUCCESS: {
//       return {
//         ...state,
//         result: action.payload
//       };
//     }
//
//     default: {
//       return state;
//     }
//   }
// }
