import axios from "axios";
import { call, put } from "redux-saga/effects";
import { deleteItemError, deleteItemSuccess } from "../actions/todo";

const run = function* (action) {
  try {
    const id = action.payload;
    const response = yield call(
      axios.delete,
      `https://react-http-test-f4741-default-rtdb.firebaseio.com/todos/${id}.json`
    );
    yield put(deleteItemSuccess(id));
  } catch (error) {
    yield put(deleteItemError(error));
  }
};
export default run;
