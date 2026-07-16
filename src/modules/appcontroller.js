import Project from "./project";

class AppController {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Inbox"));
    this.activeProject = this.projects[0];
   
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(projectId) {
    this.projects = this.projects.filter(
      (project) => project.id !== projectId,
    );
  }

  getProject(projectId) {
    return this.projects.find((project) => project.id === projectId);
  }



  currentProject(){
 return this.activeProject
}

setActiveProject(projectId){
  this.activeProject = this.getProject(projectId)
}
}

export default AppController;