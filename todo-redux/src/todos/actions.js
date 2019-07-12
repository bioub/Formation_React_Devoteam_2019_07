import { TODO_ADD } from './constants';

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
