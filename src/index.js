import AppController from "./modules/appcontroller";
import {load ,save} from "./modules/storage";
import DOMController from "./modules/domcontroller";

const savedProjects = load();
const app = new AppController()

if(savedProjects.length > 0 ){
    app.projects = savedProjects
    app.activeProject = savedProjects[0]
}


const ui = new DOMController(app);
ui.render();