import "./style.css";
import { UI } from "./modules/ui";
import { loadFromLocalStorage } from "./modules/storage";

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  UI.renderProjects();
  UI.renderTodos();
});
