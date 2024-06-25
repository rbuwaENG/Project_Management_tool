// projectService.js
import Project from './project.js';

class ProjectService {

// read json 
  async readJson(){
    const response = await fetch('project.json')
    const data  =  await response.json()
    return data.projects;  
    //update in cosole 
    //data.projects.forEach(projectsInFile => {
      //console.log(projectsInFile.id);
      //console.log(projectsInFile.name);});
   
    
 
   
  }
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
    return this.readJson().then(projectData => {
      const projectlist = projectData.map(detail => {
        return new Project(detail.id, detail.name, detail.revenue, detail.status);
      });
     const projects = projectlist;
      console.log(projects);
      return projects;
    });


    
  }
  


}

export default ProjectService;
