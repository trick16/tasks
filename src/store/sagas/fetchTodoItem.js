import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchTodoItemError, fetchTodoItemSuccess } from "../actions/todo";

const run = function* (action) {
  try {
    const todoItem = yield call(
      axios.get,
      `https://swapi.dev/api/people/${action.payload}`
    );
    const result = todoItem.data;
    yield put(fetchTodoItemSuccess(result));
  } catch (error) {
    yield put(fetchTodoItemError(error));
  }
};
export default run;
