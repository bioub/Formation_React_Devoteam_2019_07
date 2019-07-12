import React from 'react';
import TodoFormContainer from '../containers/TodoFormContainer';
import TodoListContainer from '../containers/TodoListContainer';
import TodoFiltersContainer from '../containers/TodoFiltersContainer';

export default function Todo() {
  return (
    <div className="Todo">
      <h2>Page Todos</h2>
      <TodoFormContainer />
      <TodoListContainer />
      <TodoFiltersContainer />
    </div>
  );
}
