import taskModal from './taskModal.js';
import task from './task.js';
import projectModal from './projectModal.js';
import project from './project.js';
import { displayTasks, displayToday, sortTasks, displayWeek, displayOverdue } from './taskHandler.js';
import { updateTasksStorage, updateProjectsStorage } from './storage.js';

export function setupEventListeners(tasksArray, projectsArray) {
    const mainTitle = document.querySelector('#main-container-display');

    setupNewTaskListener(tasksArray, projectsArray, mainTitle);
    setupInboxListener(tasksArray, mainTitle);
    setupTodayListener(tasksArray, mainTitle);
    setupWeekListener(tasksArray, mainTitle);
    setupOverdueListener(tasksArray, mainTitle);
    setupProjectModalListener(projectsArray);
}

function setupNewTaskListener(tasksArray, projectsArray, mainTitle) {
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
            const parentProject = !isNaN(parentProjectIndex) ? projectsArray[parentProjectIndex] : null;
            const taskArticle = task(name, details, importance, date, parentProject);

            if (parentProject) {
                parentProject.addTask(taskArticle);
            }

            tasksArray.push(taskArticle); 
            taskForm.reset();
            newTask.close();
            newTask.remove();
            updateTasksStorage(tasksArray);
            sortTasks(tasksArray);
            displayTasks(tasksArray);
        });
    });
}

function setupInboxListener(tasksArray, mainTitle) {
    document.querySelector('#inbox-btn').addEventListener('click', () => {
        mainTitle.textContent = 'Inbox';
        displayTasks(tasksArray);
    });
}

function setupTodayListener(tasksArray, mainTitle) {
    document.querySelector('#today-btn').addEventListener('click', () => {
        mainTitle.textContent = 'Today';
        displayToday(tasksArray);
    });
}

function setupWeekListener(tasksArray, mainTitle) {
    document.querySelector('#week-btn').addEventListener('click', () => {
        mainTitle.textContent = 'This Week';
        displayWeek(tasksArray);
    });
}

function setupOverdueListener(tasksArray, mainTitle) {
    document.querySelector('#overdue-btn').addEventListener('click', () => {
        mainTitle.textContent = 'Overdue';
        displayOverdue(tasksArray);
    });
}

function setupProjectModalListener(projectsArray) {
    document.querySelector('#sidebar-project').addEventListener('click', () => {
        const projectInput = projectModal();
        projectInput.showModal();
        const projectForm = document.querySelector('#project-form');
        projectForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const projectName = document.querySelector('#project-input').value;
            const newProject = project(projectName);
            projectsArray.push(newProject);
            newProject.createProjectDOM();
            updateProjectsStorage(projectsArray);
            projectForm.reset();
            projectInput.close();
            projectInput.remove();
        });
    });
}