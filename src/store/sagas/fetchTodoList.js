import { call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchTodoListError, fetchTodoListSuccess } from "../actions/todo";
const run = function* (action) {
  try {
    const todos = yield call(
      axios.get,
      "https://react-http-test-f4741-default-rtdb.firebaseio.com/todos.json"
    );
    const result = [];
    const data = todos.data;
    for (const key in data) {
      result.push({
        id: key,
        name: data[key].name,
        date: data[key].date,
        time: data[key].time,
        color: data[key].color,
        isImportant: data[key].isImportant,
        isDone: data[key].isDone,
        description: data[key].description,
      });
    }
    yield put(fetchTodoListSuccess(result));
  } catch (error) {
    yield put(fetchTodoListError(error));
    console.log(error);
  }
};
export default run;
