import { call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchTodoListSuccess } from "../actions/todo";
const run = function* (action) {
  try {
    const todo = yield call(axios.get, "https://swapi.dev/api/people/");
    const result = todo.data.results;
    yield put(fetchTodoListSuccess(result));
  } catch (error) {
    console.log(error);
  }
};
export default run;
