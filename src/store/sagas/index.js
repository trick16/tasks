import { takeLatest } from "redux-saga/effects";
import fetchTodoListWorker from "./fetchTodoList";
import fetchTodoItemWorker from "./fetchTodoItem";
import createTodoItem from "./createTodoItem";
import deleteTodoItem from "./deleteTodoItem";
import { TODO_ACTION_TYPES } from "../actions/todo";
const run = function* () {
  yield takeLatest(TODO_ACTION_TYPES.FETCH_LIST, fetchTodoListWorker);
  yield takeLatest(TODO_ACTION_TYPES.FETCH_ITEM, fetchTodoItemWorker);
  yield takeLatest(TODO_ACTION_TYPES.CREATE_ITEM, createTodoItem);
  yield takeLatest(TODO_ACTION_TYPES.DELETE_ITEM, deleteTodoItem);
};
export default run;
