const { COUNTER_DECREMENT, COUNTER_INCREMENT } = require("./constants");

exports.counterIncrement = function counterIncrement(step = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: step
  };
};

exports.counterDecrement = function counterDecrement(step = 1) {
  return {
    type: COUNTER_DECREMENT,
    payload: step
  };
};
