import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./reducers/todo";
import run from "./sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [applyMiddleware(sagaMiddleware)];
  const rootSaga = run;
  let enhancer = {};

  enhancer = composeWithDevTools(...enhancers);

  const store = createStore(combineReducers({ todo: todoReducer }), enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};
export default configureStore;
