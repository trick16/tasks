import { TODO_ACTION_TYPES } from "../actions/todo";
const INITIAL_STATE = {
  items: [],
  pending: false,
  error: null,
  pendingItem: false,
  errorItem: null,
};
const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.FETCH_LIST: {
      return { ...state, pending: true };
    }
    case TODO_ACTION_TYPES.ERROR_LIST: {
      return { ...state, error: action.payload, pending: false };
    }
    case TODO_ACTION_TYPES.SUCCESS_LIST: {
      return { ...state, error: null, pending: false, items: action.payload };
    }
    case TODO_ACTION_TYPES.FETCH_ITEM: {
      return { ...state, pendingItem: true };
    }
    case TODO_ACTION_TYPES.ERROR_ITEM: {
      return { ...state, errorItem: action.payload, pendingItem: false };
    }
    case TODO_ACTION_TYPES.SUCCESS_ITEM: {
      const newItem = action.payload;
      const allItems = state.items;
      const newItems =
        allItems.length > 0
          ? allItems.map((item) => (item.id === newItem.id ? newItem : item))
          : [newItem];
      return {
        ...state,
        items: newItems,
        errorItem: null,
        pendingItem: false,
      };
    }
    default:
      return state;
  }
};
export default todoReducer;
