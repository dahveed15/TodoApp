import { combineReducers } from 'redux';
import TodoListReducer from './todo_reducer';

const entitiesReducer = combineReducers({
  todos: TodoListReducer
});

export default entitiesReducer;
