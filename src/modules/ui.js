import { ProjectManager } from "./projectManager";
import { saveToLocalStorage } from "./storage";

const UI = (() => {
  const renderProjects = () => {
    const projectList = document.querySelector("#project-list");
    projectList.innerHTML = "";
    ProjectManager.getProjects().forEach(project => {
      const projectElement = document.createElement("button");
      projectElement.textContent = project.name;
      projectElement.addEventListener("click", () => {
        ProjectManager.setActiveProject(project.name);
        renderTodos();
      });
      projectList.appendChild(projectElement);
    });
  };

  const renderTodos = () => {
    const todoList = document.querySelector("#todo-list");
    todoList.innerHTML = "";
    const project = ProjectManager.getActiveProject();
    if (!project) return;
    project.todos.forEach((todo, index) => {
      const todoElement = document.createElement("div");
      todoElement.textContent = `${todo.title} - ${todo.dueDate}`;
      todoElement.classList.add(todo.priority);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.addEventListener("click", () => {
        project.removeTodo(index);
        saveToLocalStorage();
        renderTodos();
      });

      todoElement.appendChild(deleteBtn);
      todoList.appendChild(todoElement);
    });
  };

  return { renderProjects, renderTodos };
})();

export { UI };
