const { configureStore } = require ('./configure-store');
const { counterIncrement, counterDecrement } = require('./actions');

/** @type {import('redux').Store} */
const store = configureStore();

store.subscribe(() => {
  console.log('state changed');
  console.log(store.getState());
})

function counterComponent1() {
  // increment + 1 clé count du state
  store.dispatch(counterIncrement());
}

function counterComponent2() {
  // increment + 1 clé count du state
  store.dispatch(counterDecrement());
}

function counterComponent3() {
  // increment + 1 clé count du state
  store.dispatch(counterIncrement(2));
}


counterComponent1();
counterComponent1();
counterComponent1();
counterComponent2();
counterComponent2();
counterComponent2();
counterComponent2();
counterComponent2();
counterComponent3();