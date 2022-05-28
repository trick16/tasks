import { call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchTodoListError, fetchTodoListSuccess } from "../actions/todo";
import { generateTodoId } from "../../common/utils";
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
        data: data[key].data,
        color: data[key].color,
        isImportant: data[key].isImportant,
      });
    }
    yield put(fetchTodoListSuccess(result));
  } catch (error) {
    yield put(fetchTodoListError(error));
    console.log(error);
  }
};
export default run;
