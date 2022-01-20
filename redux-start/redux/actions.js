const Add_TODO = "Add_TODO";

function addTodo(todo) {
  return {
    type: Add_TODO,
    todo: todo,
  };
}
