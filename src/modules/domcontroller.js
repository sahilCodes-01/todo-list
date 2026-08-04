class DOMController {
  constructor(app) {
    this.app = app;

    this.projectList = document.getElementById("project-list");
    this.todoList = document.getElementById("todo-list");
    this.projectTitle = document.getElementById("project-title");
    this.projectSubtitle = document.getElementById("project-subtitle");
    this.newProjectBtn = document.getElementById("new-project-btn");
    this.addTodoBtn = document.getElementById("add-todo-btn");

    this.projectDialog = document.getElementById("project-dialog");
    this.cancelProjectBtn = document.getElementById("cancel-project-btn");
    this.confirmProjectBtn = document.getElementById("confirm-project-btn");
    this.projectNameInput = document.getElementById("project-name");

    this.newProjectBtn.addEventListener("click", () => {
      this.projectDialog.showModal();
    });

    this.cancelProjectBtn.addEventListener("click", () => {
      this.projectDialog.close();
    });

this.confirmProjectBtn.addEventListener("click", () =>{

})



    // this.addTodoBtn.addEventListener("click", () => {
    //   // what happens when user clicks add todo?
    // });
  }

  renderSidebar() {
    this.projectList.innerHTML = "";
    this.app.projects.forEach((project) => {
      const button = document.createElement("button");
      const count = document.createElement("span");

      button.textContent = project.name;
      const incompleteCount = project.todos.filter(
        (todo) => todo.done === false,
      ).length;

      count.textContent = incompleteCount;
      button.appendChild(count);
      this.projectList.appendChild(button);

      button.addEventListener("click", () => {
        this.app.setActiveProject(project.id);
        this.render();
      });

      if (project.id === this.app.activeProject.id) {
        button.classList.add("active");
      }
    });
  }

  renderTodos() {
    this.todoList.innerHTML = "";

    const current = this.app.currentProject();
    this.projectTitle.textContent = current.name;
    const done = current.todos.filter((todo) => todo.done).length;
    this.projectSubtitle.textContent = `${done} of ${current.todos.length} complete`;

    this.app.currentProject().todos.forEach((todo) => {
      const titleDiv = document.createElement("div");
      titleDiv.textContent = todo.title;
      this.todoList.appendChild(titleDiv);
    });
  }

  render() {
    this.renderSidebar();
    this.renderTodos();
  }
}

export default DOMController;
