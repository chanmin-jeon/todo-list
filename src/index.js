import loadNav from './loadNav.js'; 
import loadMain from './loadMain.js';
import taskModal from './taskModal.js';
import task from './task.js';
import projectModal from './projectModal.js';
import project from './project.js'; 
import {displayAllTasks, displayToday, sortTasks, displayWeek, displayOverdue} from './taskHandler.js';

// store all tasks 
const tasksArray = []; 

// store all projects 
const projectsArray = []; 

// load sidebar nav
loadNav(); 

// load main display
loadMain(); 

// new task event listner
document.querySelector('#new-task-btn').addEventListener('click', () => {
    const newTask = taskModal(); 
    newTask.showModal(); 

    const taskForm = document.querySelector('#task-form'); 
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('#task-title').value;
        const details = document.querySelector('#task-details').value;
        const date = document.querySelector('#task-date').value;
        const importance = document.querySelector('#task-priority').value;
        const taskArticle = task(name, details, importance, date);
        tasksArray.push(taskArticle);
        taskForm.reset();
        newTask.close();
        newTask.remove(); 
        sortTasks(tasksArray); 
        displayAllTasks(tasksArray); 
        
    });
}); 

// Inbox button event listener 
document.querySelector('#inbox-btn').addEventListener('click', () => {
    displayAllTasks(tasksArray); 
}); 

// Today button event listener
document.querySelector('#today-btn').addEventListener('click', () => {
    displayToday(tasksArray); 
});

// This week button event listener 
document.querySelector('#week-btn').addEventListener('click', () => {
    displayWeek(tasksArray); 
})

// Overdue event listener
document.querySelector('#overdue-btn').addEventListener('click', () => {
    displayOverdue(tasksArray); 
})

// projectModal event listener 
document.querySelector('#sidebar-project').addEventListener('click', () => {
    const projectInput = projectModal();
    projectInput.showModal();  

    const projectForm = document.querySelector('#project-form'); 
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const projectName = document.querySelector('#project-input').value; 
        console.log(projectName); 
        const newProject = project(projectName); 
        newProject.createProjectDOM(); 
        projectForm.reset(); 
        projectInput.close(); 
        projectInput.remove(); 
    })
})