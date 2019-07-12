import { combineReducers } from 'redux';
import { TODO_CHANGE, TODO_ADD, TODO_DELETE, TODO_CHECK, TODO_FILTER, TODO_FETCH_SUCCESS, TODO_FETCH_REQUESTED } from './constants';

// reducer qui traite TODO_CHANGE
export function valueReducer(state = '', action) {
  switch (action.type) {
    case TODO_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

// reducer qui traite TODO_ADD et TODO_DELETE
export function itemsReducer(state = [], action) {
  switch (action.type) {
    case TODO_FETCH_SUCCESS:
      return action.payload;
    case TODO_ADD:
      return [...state, action.payload];
    case TODO_DELETE:
      return state.filter((item) => item.id !== action.payload.id);
    case TODO_CHECK:
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...action.payload,
          completed: !action.payload.completed,
        };
      });
    default:
      return state;
  }
}

export function filterReducer(state = 'ALL', action) {
  switch (action.type) {
    case TODO_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case TODO_FETCH_REQUESTED:
      return true;
    case TODO_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
}

export const todosReducer = combineReducers({
  loading: loadingReducer,
  filter: filterReducer,
  value: valueReducer,
  items: itemsReducer,
});
