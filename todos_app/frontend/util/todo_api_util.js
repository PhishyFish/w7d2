export function getTodos() {
  return $.ajax({
    url: 'api/todos',
    method: 'GET'
  });
}

export function createTodo(todo) {
  return $.ajax({
    url: 'api/todos',
    method: 'POST',
    data: { todo: todo }
  });
}

export function updateTodo(todo) {
  return $.ajax({
    url: `api/todos/${todo.id}`,
    method: 'PATCH',
    data: { todo: todo }
  });
}
