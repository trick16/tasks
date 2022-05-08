import { call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchTodoListError, fetchTodoListSuccess } from "../actions/todo";
const run = function* (action) {
  try {
    const todo = yield call(axios.get, "https://swapi.dev/api/people/");
    const result = todo.data.results;
    const updatedResult = result.map((item) => {
      let urlArray = item.url.split("/");
      let id = urlArray[urlArray.length - 1]
        ? urlArray[urlArray.length - 1]
        : urlArray[urlArray.length - 2];
      return {
        name: item.name,
        id: id,
        birth_year: item.birth_year,
        gender: item.gender,
      };
    });

    yield put(fetchTodoListSuccess(updatedResult));
  } catch (error) {
    yield put(fetchTodoListError(error));
    console.log(error);
  }
};
export default run;
