import React, { Component } from 'react';
import css from './Select.module.css';

export default class Select extends Component {
  state = {
    selected: {
      value: 'romain',
      label: 'Romain',
    },
  };

  handleClick = (item) => {
    this.setState({
      selected: item,
    });
  };

  render() {
    const { items = [] } = this.props;

    const itemsJsx = items.map((item) => (
      <div
        className="Item"
        key={item.value}
        onClick={() => this.handleClick(item)}
      >
        {item.value === this.state.selected.value && <>&rarr;</>} {item.label}
      </div>
    ));

    return (
      <div className="Select">
        <div className={css.Selected}>{this.state.selected.label}</div>
        <div className="Items">
          {itemsJsx}
          {/* <div className="Item">&rarr; Romain</div> */}
          {/* <div className="Item">Eric</div> */}
        </div>
      </div>
    );
  }
}
