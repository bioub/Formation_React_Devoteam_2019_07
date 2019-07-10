import React, { Component } from 'react'

// class component / stateful component (on peut utiliser state)
export default class Clock extends Component {
  constructor() {
    super();
    // contraitement à props, state n'est pas créé automatiquement
    this.state = {
      now: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      // setState fusionne ce state et le state actuel (pas récursif)
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  // render obligatoire, la méthode qui retourne le JSX
  render() {
    // pour accéder aux props (comme dans Hello)
    // const { name = '' } = this.props; 
    return (
      <div className="Clock">
        {this.state.now.toLocaleTimeString()}
      </div>
    );
  }
}
