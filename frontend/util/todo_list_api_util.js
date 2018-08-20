export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/todo_lists'
  });
};

export const fetchTodo = id => {
  return $.ajax({
    method: 'GET',
    url: `api/todo_lists/${id}`
  });
};

export const createTodo = todoList => {
  return $.ajax({
    method: 'POST',
    url: 'api/todo_lists',
    data: { todoList }
  });
};

export const updateTodo = todoList => {
  return $.ajax({
    method: 'PATCH',
    url: `api/todo_lists/${todoList.id}`,
    data: { todoList }
  });
};

export const deleteTodo = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/todo_lists/${id}`
  });
};
