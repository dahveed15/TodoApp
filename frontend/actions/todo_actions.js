import * as TodoListApiUtil from '../util/todo_list_api_util';

export const RECEIVE_ALL_TODOS = 'RECEIVE_ALL_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveAllTodos = todos => {
  return {
    type: RECEIVE_ALL_TODOS,
    todos
  };
};

export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = todoId => {
  return {
    type: REMOVE_TODO,
    todoId
  };
};

export const fetchTodos = () => dispatch => {
  return TodoListApiUtil.fetchTodos().then(todos =>
    dispatch(receiveAllTodos(todos))
  );
};

export const fetchTodo = id => dispatch => {
  return TodoListApiUtil.fetchTodo(id).then(todo =>
    dispatch(receiveTodo(todo))
  );
};

export const createTodo = todo => dispatch => {
  return TodoListApiUtil.createTodo(todo).then(createdTodo =>
    dispatch(receiveTodo(createdTodo))
  );
};

export const updateTodo = todo => dispatch => {
  return TodoListApiUtil.updateTodo(todo).then(updatedTodo =>
    dispatch(receiveTodo(updatedTodo))
  );
};

export const deleteTodo = todoId => dispatch => {
  return TodoListApiUtil.deleteTodo(todoId).then(() =>
    dispatch(removeTodo(todoId))
  );
};
