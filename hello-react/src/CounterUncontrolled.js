import React, { Component } from 'react'

/*
export default class CounterUncontrolled extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this); // créer une fonction avec bonne valeur de this
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div className="CounterUncontrolled">
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    )
  }
}
*/

// plus court mais pas encore normé (stage 3 du TC39)
export default class CounterUncontrolled extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div className="Counter">
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    )
  }
}