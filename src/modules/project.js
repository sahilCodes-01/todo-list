class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = crypto.randomUUID();
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  getTodo(todoValue) {
    return this.todos.find((todo) => todo.id === todoValue);
  }
}

export default Project;
