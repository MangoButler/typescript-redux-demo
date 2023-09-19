import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      //the generic on the dispatch function tells ts that we need to pass in an argument of type FetchTodoActions
      //so with the interface we can ensure that we are always passing in the correct argument to the action creators function
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export interface DeleteTodosAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const deleteTodo = (id: number): DeleteTodosAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
