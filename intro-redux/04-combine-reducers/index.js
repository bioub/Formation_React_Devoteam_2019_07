const { configureStore } = require ('./configure-store');
const { counterIncrement, counterDecrement, todoChange } = require('./actions');

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

function todoFormComponent() {
  // increment + 1 clé count du state
  store.dispatch(todoChange('Acheter du pain'));
}


counterComponent1();
counterComponent1();
counterComponent1();
counterComponent2();
counterComponent2();
counterComponent2();
todoFormComponent();
counterComponent2();
counterComponent2();
counterComponent3();