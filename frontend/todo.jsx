import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { fetchTodos } from './util/todo_list_api_util';
// import { fetchTodos } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchTodos = fetchTodos;
  // window.receiveAllTodos = receiveAllTodos;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Todo App</h1>, rootEl);
});
