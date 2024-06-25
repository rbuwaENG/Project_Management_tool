// homeController.js
import ProjectService from './projectService.js';

class HomeController {
  
 //create object from project service 
 projectService = new ProjectService();
  
  initialize() {
      //get all 
    const projects = this.projectService.getAll();
    this.fillList(projects);
  }

  fillList(projects) {
    //fill the table by each row 
    const projectObject = document.getElementById('tableBody');
    projectObject.innerHTML = ' ';

    projects.forEach(project => {
      const row = document.createElement('tr');

      const idCol = document.createElement('td');
      idCol.textContent = project.id;
      row.appendChild(idCol);

      const nameCol = document.createElement('td');
      nameCol.textContent = project.name;
      row.appendChild(nameCol);

      const revenueCol = document.createElement('td');
      revenueCol.textContent = project.revenue;
      row.appendChild(revenueCol);

      const statusCol = document.createElement('td');
      statusCol.textContent = project.status;
      row.appendChild(statusCol);

      projectObject.appendChild(row);
    });
  }
}

export default HomeController;
