// projectService.js
import Project from './project.js';

class ProjectService {
  async readjson() {
    const response = await fetch('project.json');
    if (!response.ok) {
      alert(`Error!!! Json file does not exist.`);
    }
    const data = await response.json();
    const projects = [];
    data.projects.forEach(projectData => {
      projects.push(new Project(projectData.id, projectData.name, projectData.revenue, projectData.status));
    });

    return projects;}
    async getAll() {
      const projects = await this.readjson();
      console.log([projects]);
      return projects;
      }
    }
    
    export default ProjectService;
