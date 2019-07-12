import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  componentDidMount() {

    // On a les todos en cache (pas besoin de refaire la requete)
    if (this.props.todos.length) {
      return;
    }

    this.props.onMount();
  }
  render() {
    const props = this.props;
    const todosJsx = props.todos.map((todo) => (
      <TodoItem onTodoDelete={props.onTodoDelete}  onTodoCheck={props.onTodoCheck} key={todo.id} todo={todo} />
    ));
    return <div className="TodoList">{props.loading ? 'Chargement...' : todosJsx}</div>;
  }
}

export default TodoList;
