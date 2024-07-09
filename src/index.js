import loadPage from './loadPage.js'; 
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
loadPage(); 

// container title 
const mainTitle = document.querySelector('#main-container-display'); 

// new task event listner
document.querySelector('#new-task-btn').addEventListener('click', () => {
    const newTask = taskModal(projectsArray); 
    newTask.showModal(); 

    const taskForm = document.querySelector('#task-form'); 
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        mainTitle.textContent = 'Inbox'; 

        const name = document.querySelector('#task-title').value;
        const details = document.querySelector('#task-details').value;
        const date = document.querySelector('#task-date').value;
        const importance = document.querySelector('#task-priority').value;
        const parentProjectIndex = parseInt(document.querySelector('#parent-project').value); 
        const parentProject = (parentProjectIndex !== NaN) ? projectsArray[parentProjectIndex] : null;

        const taskArticle = task(name, details, importance, date, parentProject);
        
        if (parentProject != null && parentProject.name) {
            parentProject.addTask(taskArticle); 
        }

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
    mainTitle.textContent = 'Inbox'; 
    displayAllTasks(tasksArray); 
}); 

// Today button event listener
document.querySelector('#today-btn').addEventListener('click', () => {
    mainTitle.textContent = 'Today'; 
    displayToday(tasksArray); 
});

// This week button event listener 
document.querySelector('#week-btn').addEventListener('click', () => {
    mainTitle.textContent = 'This Week'; 
    displayWeek(tasksArray); 
})

// Overdue event listener
document.querySelector('#overdue-btn').addEventListener('click', () => {
    mainTitle.textContent = 'Overdue'; 
    displayOverdue(tasksArray); 
})

// projectModal event listener 
document.querySelector('#sidebar-project').addEventListener('click', () => {
    const projectInput = projectModal();
    projectInput.showModal();  

    const projectForm = document.querySelector('#project-form'); 
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        // get project name and push to projects array 
        const projectName = document.querySelector('#project-input').value; 
        const newProject = project(projectName); 
        projectsArray.push(newProject); 
        newProject.createProjectDOM(); 
        projectForm.reset(); 
        projectInput.close(); 
        projectInput.remove(); 
    })
}); 
