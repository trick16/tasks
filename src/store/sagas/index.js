import { takeLatest } from "redux-saga/effects";
import todoWorker from "./todo";
import { TODO_ACTION_TYPES } from "../actions/todo";
const run = function* () {
  yield takeLatest(TODO_ACTION_TYPES.FETCH, todoWorker);
};
export default run;
