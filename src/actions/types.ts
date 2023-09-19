import { FetchTodosAction, DeleteTodosAction } from '.';

export enum ActionTypes {
  fetchTodos, //by default an enaum will gve the props values of 0,1 and so on, since here we just need the type to be somehting unique, we wont have to specifiz a certain string
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodosAction;
