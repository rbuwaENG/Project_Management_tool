// projectService.js
import Project from './project.js';

class ProjectService {
//function 
  getAll() {
      //hard coded array of projectcs 
      // id ||  name || revenue || status
    const projects = [
      new Project(1, 'Project 1', 100000,'Completed'),
      new Project(2, 'Command Program', 150000,'Completed'),
      new Project(3, 'Project Point', 200000, 'Ongoing'),
      new Project(4, 'Project 2.1', 200000, 'Ongoing'),
      new Project(5, 'Project 3', 200000, 'Ongoing'),
    ];
    return projects;
  }
}



export default ProjectService;
