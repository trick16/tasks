export const TODO_ACTION_TYPES = {
  FETCH: "fetch/todoList/Request",
  ERROR: "fetch/todoList/Error",
  SUCCESS: "fetch/todoList/Success",
};
export const fetchTodoList = () => ({
  type: TODO_ACTION_TYPES.FETCH,
  payload: null,
});
export const fetchTodoListError = (error) => ({
  type: TODO_ACTION_TYPES.ERROR,
  payload: error,
});
export const fetchTodoListSuccess = (data) => ({
  type: TODO_ACTION_TYPES.SUCCESS,
  payload: data,
});
