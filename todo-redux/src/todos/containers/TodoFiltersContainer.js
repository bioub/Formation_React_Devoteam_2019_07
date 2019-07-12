import { connect } from 'react-redux';
import { todoFilter } from '../actions';
import TodoFilters from '../components/TodoFilters';

function mapStateToProps(state) {
  return {
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFilterClick: (filter) => dispatch(todoFilter(filter)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoFilters);
