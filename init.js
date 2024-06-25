// init.js
//import the homeController 
import HomeController from './homeController.js';


//initilaize the home contoller when trigger the DOMcontentloaded
//lambda expression 
document.addEventListener('DOMContentLoaded', () => {
  const homeController = new HomeController();
  homeController.initialize();
});
