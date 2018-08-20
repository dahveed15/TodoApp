import React from 'react';
import ReactDOM from 'react-dom';
// import { fetchTodos } from './util/todo_list_api_util';
// import { receiveAllTodos } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  // window.fetchTodos = fetchTodos;
  // window.receiveAllTodos = receiveAllTodos;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Todo App</h1>, rootEl);
});
