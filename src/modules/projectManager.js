import { Project } from "./project";

const ProjectManager = (() => {
  let projects = [];
  let activeProject = null;

  const addProject = (name) => {
    const newProject = new Project(name);
    projects.push(newProject);
    if (!activeProject) activeProject = newProject;
  };

  const getProjects = () => projects;
  const setActiveProject = (name) => {
    activeProject = projects.find(p => p.name === name);
  };
  const getActiveProject = () => activeProject;

  return { addProject, getProjects, setActiveProject, getActiveProject };
})();

export { ProjectManager };
