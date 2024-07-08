import loadNav from './loadNav.js'; 
import startModal from './startModal.js';
import loadMain from './loadMain.js';
import projectModal from './projectModal';
import project from './project';
import displayAllTasks from './displayAllTasks.js';

const projectsArray = []; 

// getting the user name
const userInfo = startModal(); 

userInfo.showModal(); 
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    const userName = document.querySelector('#user-name').value; 
    document.querySelector('form').reset(); 
    userInfo.close(); 
    userInfo.remove(); 
    loadNav(userName); 
}); 

loadMain(); 


document.querySelector('#new-project-btn').addEventListener('click', () => {
    const newProject = projectModal(); 
    newProject.showModal(); 

    const projectForm = document.querySelector('#project-form'); 

    console.log(projectForm.id); 

    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('#project-title').value;
        const details = document.querySelector('#project-details').value;
        const date = document.querySelector('#project-date').value;
        const importance = document.querySelector('#project-priority').value;
        const projectArticle = project(name, details, importance, date);
        //const projectDisplay = projectArticle.createProjectDOM();
        projectsArray.push(projectArticle);
        projectForm.reset();
        newProject.close();
        newProject.remove(); 
        displayAllTasks(projectsArray); 
        console.log(projectsArray); 
    });
}); 
