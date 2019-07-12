import { createStore } from 'redux';
import { todosReducer } from './todos/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = todosReducer;

export function configureStore() {
  const store = createStore(reducer, composeWithDevTools());
  return store;
};
