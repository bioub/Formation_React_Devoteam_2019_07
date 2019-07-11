import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const todosJsx = props.todos.map((todo) => (
    <TodoItem onTodoDelete={props.onTodoDelete} key={todo.id} todo={todo} />
  ));
  return <div className="TodoList">{todosJsx}</div>;
}

export default TodoList;
