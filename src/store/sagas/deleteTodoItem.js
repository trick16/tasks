import axios from "axios";
import { call, put } from "redux-saga/effects";
import { deleteItemError, deleteItemSuccess } from "../actions/todo";

const run = function* (action) {
  try {
    const response = yield call(
      axios.delete,
      `https://react-http-test-f4741-default-rtdb.firebaseio.com/todos/${action.payload}.json`
    );
    yield put(deleteItemSuccess());
  } catch (error) {
    yield put(deleteItemError(error));
  }
};
export default run;
