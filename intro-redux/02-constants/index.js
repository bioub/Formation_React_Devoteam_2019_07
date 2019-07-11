const { configureStore } = require ('./configure-store');
const { COUNTER_DECREMENT, COUNTER_INCREMENT } = require('./constants');

/** @type {import('redux').Store} */
const store = configureStore();

store.subscribe(() => {
  console.log('state changed');
  console.log(store.getState());
})

function otherCounterIncrement() {
  // increment + 1 clé count du state
  store.dispatch({type: COUNTER_INCREMENT});
}

function counterIncrement() {
  // increment + 1 clé count du state
  store.dispatch({type: COUNTER_INCREMENT});
}

function counterDecrement() {
  // increment + 1 clé count du state
  store.dispatch({type: COUNTER_DECREMENT});
}

counterIncrement();
counterIncrement();
counterIncrement();
counterDecrement();
counterDecrement();
counterDecrement();
counterDecrement();
counterDecrement();