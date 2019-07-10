import React from 'react';
import Hello from './Hello';
import Clock from './Clock';
import Counter from './Counter';
import Condition from './Condition';

function App() {
  // sans JSX :
  // return React.createElement('div', { className: 'App' }, 
  //   React.createElement('h2', { }, 'React')
  // );
  const name = 'Jean';
  
  return (
    <div className="App">
      <h2>React</h2>
      <Hello name="Romain" />
      <Hello name={name} />
      <Clock />
      <Counter />
      <Condition />
    </div>
  );
}

export default App;
