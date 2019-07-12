import { connect } from 'react-redux';
import { todoAdd } from '../actions';
import TodoForm from '../components/TodoForm';

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoAdd: (value) => dispatch(todoAdd(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);