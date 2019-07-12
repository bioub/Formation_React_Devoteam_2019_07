import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Todo from '../todos/components/Todo';
import Home from '../Home/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Route path="/" component={Home} exact={true} />
      <Route path="/todos" component={Todo} />
    </div>
  );
}

export default App;
