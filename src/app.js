import loadPage from './loadPage.js';
import task from './task.js';
import project from './project.js';
import { displayTasks, sortTasks } from './taskHandler.js';
import { setupEventListeners } from './eventListeners.js';

export function initializeApp() {
    loadPage();

    const tasksArray = loadTasks();
    const projectsArray = loadProjects();

    reattachTasksToProjects(tasksArray, projectsArray);
    displayProjects(projectsArray);
    sortTasks(tasksArray); 
    displayTasks(tasksArray);

    setupEventListeners(tasksArray, projectsArray);
}

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasksArrayStorage')) || [];
    return storedTasks.map(taskData => task(taskData.name, taskData.details, taskData.importance, taskData.date, taskData.parentProject));
    
}

function loadProjects() {
    const storedProjects = JSON.parse(localStorage.getItem('projectsArrayStorage')) || [];
    return storedProjects.map(projectData => project(projectData.name));
}

function reattachTasksToProjects(tasksArray, projectsArray) {
    tasksArray.forEach(task => {
        if (task.parentProject) {
            const parentProject = projectsArray.find(p => p.name === task.parentProject);
            if (parentProject) {
                parentProject.addTask(task);
                task.parentProject = parentProject;
            }
        }
    });
}

function displayProjects(projectsArray) {
    projectsArray.forEach(project => project.createProjectDOM());
}