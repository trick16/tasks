export const TODO_ACTION_TYPES = {
  FETCH_LIST: "fetch/todoList/Request",
  ERROR_LIST: "fetch/todoList/Error",
  SUCCESS_LIST: "fetch/todoList/Success",
  FETCH_ITEM: "fetch/todoItem/Request",
  ERROR_ITEM: "fetch/todoItem/Error",
  SUCCESS_ITEM: "fetch/todoItem/Success",
};
export const fetchTodoList = () => ({
  type: TODO_ACTION_TYPES.FETCH_LIST,
  payload: null,
});
export const fetchTodoListError = (error) => ({
  type: TODO_ACTION_TYPES.ERROR_LIST,
  payload: error,
});
export const fetchTodoListSuccess = (data) => ({
  type: TODO_ACTION_TYPES.SUCCESS_LIST,
  payload: data,
});
export const fetchTodoItem = (id) => ({
  type: TODO_ACTION_TYPES.FETCH_ITEM,
  payload: id,
});
export const fetchTodoItemError = (error) => ({
  type: TODO_ACTION_TYPES.ERROR_ITEM,
  payload: error,
});
export const fetchTodoItemSuccess = (data) => ({
  type: TODO_ACTION_TYPES.SUCCESS_ITEM,
  payload: data,
});
