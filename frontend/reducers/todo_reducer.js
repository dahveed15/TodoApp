import {
  RECEIVE_ALL_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO
} from '../actions/todo_actions';
import merge from 'lodash/merge';

const TodoListReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TODOS:
      return merge({}, action.todos);
    case RECEIVE_TODO:
      return merge({}, oldState, { [action.todo.id]: action.todo });
    case REMOVE_TODO:
      let newState = merge({}, oldState);
      delete newState[action.todoId];
      return newState;
    default:
      return oldState;
  }
};

export default TodoListReducer;
