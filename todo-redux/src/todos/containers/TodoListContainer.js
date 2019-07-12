import { connect } from 'react-redux';
import { todoDelete, todoCheck, todoFetchSuccess, todoFetchRequested } from '../actions';
import TodoList from '../components/TodoList';
import { selectItems, selectLoading } from '../selectors';
import { fetchTodos } from '../api';

function mapStateToProps(state) {
  return {
    todos: selectItems(state),
    loading: selectLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(todoFetchRequested());
      fetchTodos().then((todos) => {
        dispatch(todoFetchSuccess(todos));
      });
    },
    onTodoDelete: (todo) => dispatch(todoDelete(todo)),
    onTodoCheck: (todo) => dispatch(todoCheck(todo)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

// API Promise (nouveauté de ES2015)
// fetchTodos()
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// Nouveauté de ES2017
// async function onLoad() {
//   const res = await fetchTodos();
//   const data = await res.json();
// }
// onLoad();
