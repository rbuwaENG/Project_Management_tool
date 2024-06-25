// projectService.js
import Project from './project.js';

class ProjectService {

  async readjson() {
    const response = await fetch('project.json');
    const data = await response.json();
    const projects = [];
    data.projects.forEach(projectData => {
      projects.push(new Project(projectData.id, projectData.name, projectData.revenue, projectData.status));
    });
    return projects;
  }

async getAll() {
  const projects = await this.readjson();
  return projects;
  }
}
export default ProjectService;