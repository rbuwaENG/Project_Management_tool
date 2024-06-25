// homeController.js
import ProjectService from './projectService.js';

class HomeController {
  
 //create object from project service 
 projectService = new ProjectService();
  
  async initialize() {
      //get all 
    const projects = await this.projectService.getAll();
    this.fillList(projects);
  }

  createCell(row, Content) {
    const cell = document.createElement('td');
    cell.textContent = Content;
    row.appendChild(cell);
  }
  
  fillList(projects) {
    //fill the table by each row 
    const projectObject = document.getElementById('tableBody');
    projectObject.innerHTML = ' ';
    projects.forEach(project => {
      const row = document.createElement('tr');
      this.createCell(row, project.id)
      this.createCell(row, project.name)
      this.createCell(row, `$${project.revenue}`)
      this.createCell(row, project.status)
      projectObject.appendChild(row);
    });
  }
}
export default HomeController;