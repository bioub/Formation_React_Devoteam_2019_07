import { connect } from 'react-redux';
import { todoAdd, todoChange } from '../actions';
import TodoForm from '../components/TodoForm';

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoChange: (value) => dispatch(todoChange(value)),
    onTodoAdd: (value) => dispatch(todoAdd(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);