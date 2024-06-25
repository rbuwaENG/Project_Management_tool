// projectService.js
import Project from './project.js';

class ProjectService {
  constructor() {
    this.projectslist = [];
    this.readJson();
    this.getAll();
  }

<<<<<<< HEAD
// read json 
  async readJson(){
    const response = await fetch('project.json')
    const data  =  await response.json()
    this.projectslist = data.projects.map(detail => {
      console.log(detail.id);
      return new Project(detail.id, detail.name, detail.revenue, detail.status);
      
    });
    console.log(this.projectslist.length)
  }
    //update in cosole 
    //data.projects.forEach(projectsInFile => {
      //console.log(projectsInFile.id);
      //console.log(projectsInFile.name);});
   
    

//function 
 getAll() {
  
  //console.log(returnList);
  /*this.readjson().forEach(detail => {
    //new Project(detail.id,detail.name, 20000,'On going')
    console.log(detail.name);
  });*/
      //hard coded array of projectcs 
      // id ||  name || revenue || status
  
  // const projects = [
    
   
 //  ];

   
    //return projects;
   // return this.readJson().then(projectData => {
   //   const projectlist = projectData.map(detail => {
   //     return new Project(detail.id, detail.name, detail.revenue, detail.status);
   //   });
   //  const projects = projectlist;
   //   console.log(projects);
   //   return projects;
  //  });
  console.log(this.projectslist.length);
  return this.projectslist;
  if (this.projects.length === 0) {
    // Return an initial hardcoded array if the projects are not yet loaded
    return [
      new Project(1, 'Loading...', 0, 'Loading...')
    ];
  }
 
}
    
=======
  async readjson() {
    const response = await fetch('project.json');
    const data = await response.json();
    const projects = [];
    data.projects.forEach(projectData => {
      projects.push(new Project(projectData.id, projectData.name, projectData.revenue, projectData.status));
    });
    return projects;
>>>>>>> feature/FI-690-read-Jason-file
  }

<<<<<<< HEAD


export default ProjectService;
=======
async getAll() {
  const projects = await this.readjson();
  return projects;
  }
}
export default ProjectService;
>>>>>>> feature/FI-690-read-Jason-file
