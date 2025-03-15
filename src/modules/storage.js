import { Project } from "./project";
import { Todo } from "./todo";
import { ProjectManager } from "./projectManager";

const saveToLocalStorage = () => {
  localStorage.setItem("projects", JSON.stringify(ProjectManager.getProjects()));
};

const loadFromLocalStorage = () => {
  const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  storedProjects.forEach(proj => {
    const project = new Project(proj.name);
    proj.todos.forEach(todo => {
      project.addTodo(new Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.completed));
    });
    ProjectManager.addProject(project);
  });
};

export { saveToLocalStorage, loadFromLocalStorage };
