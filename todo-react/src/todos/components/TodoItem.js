import React from 'react';

function TodoItem(props) {
  console.log('render TodoItem');

  return (
    <div className="TodoItem">
      {props.todo.title}
      <button onClick={() => props.onTodoDelete(props.todo)}>-</button>
    </div>
  );
}

export default TodoItem;
