import React, { Component } from 'react'
import Clock from './Clock';

export default class Condition extends Component {
  state = {
    prenoms: ['Jean', 'Paul', 'Pierre'],
    showClock: true,
  }
  render() {

    const prenomsJsx = this.state.prenoms.map((prenom) => <div key={prenom}>{prenom}</div>);

    let clockJsx;

    if (this.state.showClock) {
      clockJsx = <Clock />
    }

    return (
      <div>
        {clockJsx}
        {this.state.showClock && <Clock />}
        {prenomsJsx}
        {this.state.prenoms.map((prenom) => <div key={prenom}>{prenom}</div>)}
      </div>
    )
  }
}
