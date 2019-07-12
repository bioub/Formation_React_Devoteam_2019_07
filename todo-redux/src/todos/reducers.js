import { combineReducers } from "redux";

// reducer qui traite TODO_CHANGE
export function valueReducer(state = '', action) {
  switch (action.type) {
    // case ...
    //    return
    default:
      return state;
  }
}

// reducer qui traite TODO_ADD et TODO_DELETE
export function itemsReducer(state = [], action) {
  switch (action.type) {
    // case ...
    //    return
    // case ...
    //    return
    default:
      return state;
  }
}

export const todosReducer = combineReducers({
  value: valueReducer,
  items: itemsReducer,
});