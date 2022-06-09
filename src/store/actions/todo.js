export const TODO_ACTION_TYPES = {
  FETCH_LIST: "fetch/todoList/Request",
  ERROR_LIST: "fetch/todoList/Error",
  SUCCESS_LIST: "fetch/todoList/Success",
  FETCH_ITEM: "fetch/todoItem/Request",
  ERROR_ITEM: "fetch/todoItem/Error",
  SUCCESS_ITEM: "fetch/todoItem/Success",
  CREATE_ITEM: "create/todoItem/Request",
  ERROR_ITEM_CREATE: "create/todoItem/Error",
  SUCCESS_ITEM_CREATE: "create/todoItem/Success",
  DELETE_ITEM: "delete/todoItem/Request",
  SUCCESS_ITEM_DELETE: "delete/todoItem/Success",
  ERROR_ITEM_DELETE: "delete/todoItem/Error",
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
export const createTodoItem = (data) => ({
  type: TODO_ACTION_TYPES.CREATE_ITEM,
  payload: data,
});
export const createTodoItemError = (error) => ({
  type: TODO_ACTION_TYPES.ERROR_ITEM_CREATE,
  payload: error,
});
export const createTodoItemSuccess = (data) => ({
  type: TODO_ACTION_TYPES.SUCCESS_ITEM_CREATE,
  payload: data,
});
export const deleteTodoItem = (id) => ({
  type: TODO_ACTION_TYPES.DELETE_ITEM,
  payload: id,
});
export const deleteItemError = (error) => ({
  type: TODO_ACTION_TYPES.ERROR_ITEM_DELETE,
  payload: error,
});
export const deleteItemSuccess = (id) => ({
  type: TODO_ACTION_TYPES.SUCCESS_ITEM_DELETE,
  payload: id,
});
