import Project from "./project";
import Todo from "./todo";

const save = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

const load = () => {
  const data = localStorage.getItem("projects");

  if (data === null) {
    return [];
  } 
  
  else {
    const parsedData = JSON.parse(data);

    const rebuilt = parsedData.map((plainProject) => {

      const newProject = new Project(plainProject.name);

      newProject.id = plainProject.id;

      plainProject.todos.forEach((plainTodo) => {
        

        const newTodo = new Todo(
          plainTodo.title,
          plainTodo.description,
          plainTodo.dueDate,
          plainTodo.priority,
          plainTodo.notes,
          plainTodo.done,
        );
        newTodo.id = plainTodo.id;
        newProject.addTodo(newTodo);
      });

      return newProject;
    });

    return rebuilt;
  }
};

export { save, load };
