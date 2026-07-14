class Todo {
  constructor(title, description, dueDate, priority, notes, done) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.done = done;
     this.id = crypto.randomUUID();
  }

  toggleDone() {
    this.done = !this.done;
  }

  setPriority(priority) {
    if (priority === "high" || priority === "medium" || priority === "low") {
      this.priority = priority;
    }
  }

  edit(title, description, dueDate, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.notes = notes;
  }
}

export default Todo;
