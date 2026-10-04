import AppController from "./modules/appcontroller.js";
import {load ,save} from "./modules/storage.js";
import DOMController from "./modules/domcontroller.js";

const savedProjects = load();
const app = new AppController()

if(savedProjects.length > 0 ){
    app.projects = savedProjects
    app.activeProject = savedProjects[0]
}


const ui = new DOMController(app);
ui.render();