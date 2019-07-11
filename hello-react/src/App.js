import React, { Component } from 'react';
import Hello from './Hello';
import Clock from './Clock';
import CounterUncontrolled from './CounterUncontrolled';
import Condition from './Condition';
import Select from './Select';
import CounterControlled from './CounterControlled';
import ContactForm from './ContactForm';

class App extends Component {
  state = {
    count: 10,
  };

  
  increment = (step) => {
    this.setState({
      count: this.state.count + step,
    });
  };

  decrement = (step) => {
    this.setState({
      count: this.state.count - step,
    });
  };

  render() {
    // sans JSX :
    // return React.createElement('div', { className: 'App' },
    //   React.createElement('h2', { }, 'React')
    // );
    const name = 'Jean';
    const items = [
      { value: 'romain', label: 'Romain' },
      { value: 'eric', label: 'Eric' },
      { value: 'jean', label: 'Jean' },
    ];

    return (
      <div className="App">
        <h2>React</h2>
        <Hello name="Romain" />
        <Hello name={123} />
        <Hello name={false} />
        <Hello name={name.toUpperCase()} />
        <Hello name={name} />
        <Clock />
        <CounterUncontrolled />
        <CounterUncontrolled />

        <CounterControlled count={this.state.count} handleClick={this.increment} />
        <CounterControlled count={this.state.count} handleClick={this.decrement} />
        <Condition />
        <h2>Select</h2>
        <Select items={items} />
        <h2>Form</h2>
        <ContactForm />
      </div>
    );
  }
}

export default App;
