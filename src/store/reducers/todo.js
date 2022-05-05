import { TODO_ACTION_TYPES } from "../actions/todo";
const INITIAL_STATE = { items: [], pending: false, error: null };
const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.FETCH: {
      return { ...state, pending: true };
    }
    case TODO_ACTION_TYPES.ERROR: {
      return { ...state, error: action.payload, pending: false };
    }
    case TODO_ACTION_TYPES.SUCCESS: {
      return { ...state, error: null, pending: false, items: action.payload };
    }
    default:
      return state;
  }
};
export default todoReducer;
