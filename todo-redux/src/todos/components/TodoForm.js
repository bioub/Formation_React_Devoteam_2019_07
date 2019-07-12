import React from 'react';

function TodoForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onTodoAdd(props.value);
  }

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input
          value={props.value}
          onChange={(event) => props.onTodoChange(event.target.value)}
        />
        <button>+</button>
      </form>
    </div>
  );
}

export default TodoForm;
