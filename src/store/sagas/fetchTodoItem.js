import axios from "axios";
import { call, put } from "redux-saga/effects";
import { generateTodoId } from "../../common/utils";
import { fetchTodoItemError, fetchTodoItemSuccess } from "../actions/todo";

const run = function* (action) {
  try {
    const todoItem = yield call(
      axios.get,
      `https://swapi.dev/api/people/${action.payload}`
    );
    const result = todoItem.data;
    const id = generateTodoId(result.url);
    const updatedResult = { ...result, id };
    yield put(fetchTodoItemSuccess(updatedResult));
  } catch (error) {
    yield put(fetchTodoItemError(error));
  }
};
export default run;
