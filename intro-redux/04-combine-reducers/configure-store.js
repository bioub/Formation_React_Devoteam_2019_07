const { createStore, combineReducers } = require("redux");
const { COUNTER_DECREMENT, COUNTER_INCREMENT, TODO_CHANGE } = require('./constants');

// reducer : la fonction qui met à jour le state (du store)
// reçoit le state actuel, et une action
// retourne le prochain state mais sous la forme d'un nouvel objet (changement immuable)
// function reducer(state, action) {
//   switch (action.type) {
//     case COUNTER_INCREMENT:
//       return { ...state, count: state.count + action.payload };
//     case COUNTER_DECREMENT:
//       return { ...state, count: state.count - action.payload };
//     case TODO_CHANGE:
//       return { ...state, todo: action.payload };
//     default:
//       return state;
//   }
// }

/*
{
  count: 10,
  todo: 'Achete...',
}
*/
function countReducer(state = 10, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + action.payload;
    case COUNTER_DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}

function todoReducer(state = '', action) {
  switch (action.type) {
    case TODO_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

const reducer = combineReducers({
  count: countReducer,
  todo: todoReducer,
});

exports.configureStore = function configureStore() {
  const store = createStore(reducer, { count: 10 });
  return store;
};
