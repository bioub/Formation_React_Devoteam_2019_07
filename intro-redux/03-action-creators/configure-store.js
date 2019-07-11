const { createStore } = require("redux");
const { COUNTER_DECREMENT, COUNTER_INCREMENT } = require('./constants');

// reducer : la fonction qui met à jour le state (du store)
// reçoit le state actuel, et une action
// retourne le prochain state mais sous la forme d'un nouvel objet (changement immuable)
function reducer(state, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, count: state.count + action.payload };
    case COUNTER_DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

exports.configureStore = function configureStore() {
  const store = createStore(reducer, { count: 10 });
  return store;
};
