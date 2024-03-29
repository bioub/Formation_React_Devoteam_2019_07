import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "COUNTER_INCREMENT":
      return { ...state, count: state.count + 1 };
    case "COUNTER_DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
