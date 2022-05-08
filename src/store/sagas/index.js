import { takeLatest } from "redux-saga/effects";
import fetchTodoListWorker from "./fetchTodoList";
import fetchTodoItemWorker from "./fetchTodoItem";
import { TODO_ACTION_TYPES } from "../actions/todo";
const run = function* () {
  yield takeLatest(TODO_ACTION_TYPES.FETCH_LIST, fetchTodoListWorker);
  yield takeLatest(TODO_ACTION_TYPES.FETCH_ITEM, fetchTodoItemWorker);
};
export default run;
