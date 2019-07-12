import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFormContainer from '../containers/TodoFormContainer';

export default class Todo extends Component {
  // -> déplacer dans redux
  // state = {
  //   value: 'Acheter d',
  //   items: [
  //     {
  //       id: 123,
  //       title: 'Former à React',
  //       completed: true,
  //     },
  //     {
  //       id: 456,
  //       title: 'Introduction à Redux',
  //       completed: false,
  //     },
  //   ],
  // };

  // handleTodoChange = (value) => {
  //   this.setState({
  //     value,
  //   });
  // };

  // handleTodoDelete = (todo) => {
  //   this.setState({
  //     items: this.state.items.filter((item) => item.id !== todo.id),
  //   });
  // };

  // handleTodoAdd = (todo) => {
  //   // this.state.items.push(todo);
  //   // this.forceUpdate();
  //   this.setState({
  //     items: [...this.state.items, todo],
  //   });
  // };

  render() {
    return (
      <div className="Todo">
        <TodoFormContainer />
        {/* <TodoList todos={this.state.items} onTodoDelete={this.handleTodoDelete} /> */}
      </div>
    );
  }
}
