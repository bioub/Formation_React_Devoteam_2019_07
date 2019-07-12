const API_URL = 'http://jsonplaceholder.typicode.com/todos';

export function fetchTodos() {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((todos) => todos.filter((todo) => todo.userId === 1));
}
