import Project from "./project";

class AppController {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Inbox"));
   
  }

  addProject(projectAdd) {
    this.projects.push(projectAdd);
  }

  removeTodo(projectRemove) {
    this.projects = this.projects.filter(
      (projectAdd) => projectAdd.id !== projectRemove,
    );
  }

  getTodo(findProject) {
    return this.projects.find((projectAdd) => projectAdd.id === findProject);
  }
}
