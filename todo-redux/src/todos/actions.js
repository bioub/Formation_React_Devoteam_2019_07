import {
  TODO_CHANGE,
  TODO_ADD,
  TODO_DELETE,
  TODO_CHECK,
  TODO_FILTER,
  TODO_FETCH_SUCCESS,
  TODO_FETCH_REQUESTED,
} from './constants';

export function todoChange(value) {
  return {
    type: TODO_CHANGE,
    payload: value,
  };
}

export function todoAdd(value) {
  return {
    type: TODO_ADD,
    payload: {
      id: Math.random(),
      title: value,
      completed: false,
    },
  };
}

// createAction -> https://redux-actions.js.org/introduction/tutorial
// function createAction(type) {
//   return function(payload) {
//     return {
//       type,
//       payload,
//     };
//   }
// }
// const todoDelete = createAction(TODO_DELETE);

export function todoDelete(todo) {
  return {
    type: TODO_DELETE,
    payload: todo,
  };
}

export function todoCheck(todo) {
  return {
    type: TODO_CHECK,
    payload: todo,
  };
}

export function todoFilter(filter) {
  return {
    type: TODO_FILTER,
    payload: filter,
  };
}

export function todoFetchRequested() {
  return {
    type: TODO_FETCH_REQUESTED,
  };
}

export function todoFetchSuccess(todos) {
  return {
    type: TODO_FETCH_SUCCESS,
    payload: todos,
  };
}
