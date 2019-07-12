import React from 'react';

function TodoItem(props) {
  console.log('render TodoItem');

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={props.todo.completed} onChange={() => props.onTodoCheck(props.todo)} />
      {props.todo.title}
      <button onClick={() => props.onTodoDelete(props.todo)}>-</button>
    </div>
  );
}

export default TodoItem;
