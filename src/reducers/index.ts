import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
} //the store stater interface ensures that the reducer will always return the value of the right type

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});

///redux state from the todos reducer:
// {
//   todos: [Todo, Todo, Todo];
// }
