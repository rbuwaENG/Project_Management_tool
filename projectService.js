// projectService.js
import Project from './project.js';

class ProjectService {

// read json 
   async readjson(){
    const response = await fetch('project.json')
    const data  =  await response.json()
    //update in cosole 
    data.projects.forEach(projectsInFile => {
      console.log(projectsInFile.id);
      console.log(projectsInFile.name);
    });
   
  }
//function 
getAll() {
  this.readjson()
      //hard coded array of projectcs 
      // id ||  name || revenue || status
    const projects = [
      new Project(1, 'Project Breeze', 20000,'On going'),
      new Project(2, 'Command Program', 10000,'On going'),
      new Project(3, 'Project Point', 15000, 'Completed'),
      new Project(4, 'Project Mecha', 8000, 'On going'),
      new Project(5, 'Program Pad', 16000, 'On going'),
      new Project(6, 'Project Synergy', 22000, 'Completed'),
      new Project(7, 'Dynamic Program', 31000, 'On going'),
    ];
    
  
    return projects;
  }
  


}

export default ProjectService;
