const { configureStore } = require ('./configureStore');

/** @type {import('redux').Store} */
const store = configureStore();

store.subscribe(() => {
  console.log('state changed');
  console.log(store.getState());

  // props = {
  //  count: state.count
  // }

  // <CounterControlled {...props} />
})

function counterIncrement() {
  // increment + 1 clé count du state
  store.dispatch({type: 'COUNTER_INCREMENT'});
}

function counterDecrement() {
  // increment + 1 clé count du state
  store.dispatch({type: 'COUNTER_DECREMENT'});
}

counterIncrement();
counterIncrement();
counterIncrement();
counterDecrement();
counterDecrement();
counterDecrement();
counterDecrement();
counterDecrement();