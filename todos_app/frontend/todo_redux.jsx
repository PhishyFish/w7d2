import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

import { getTodos } from './util/todo_api_util';
import { fetchTodos, createTodo } from './actions/todo_actions';


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  window.store = store;
  window.getTodos = getTodos;
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
