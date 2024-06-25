// projectService.js
import Project from './project.js';

class ProjectService {
//function 
  getAll() {
      //hard coded array of projectcs 
      // id ||  name || revenue || status
    const projects = [
      new Project(1, 'Command Program', 100000,'Completed'),
      new Project(2, 'Project Point', 150000,'Completed'),
      new Project(3, 'Project Mecha', 200000, 'Ongoing'),
      new Project(4, 'Program Pad', 200000, 'Ongoing'),
      new Project(5, 'Project Synergy', 200000.5, 'Ongoing'),
      new Project(6, 'Project Zen\Sen', 2003430.95, 'Ongoing'),
      new Project(7, 'Project Breeze', 2003430.95, 'completed'),
    ];
    return projects;
  }
}

export default ProjectService;
