import React, { Component } from 'react';

export default function CounterControlled(props) {
  return (
    <div className="CounterControlled">
      <button onClick={() => props.handleClick(10)}>{props.count}</button>
    </div>
  );
}
