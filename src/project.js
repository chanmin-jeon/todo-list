import './style.css'; 
import folderIcon from './folderIcon.svg'; 
import {sortTasks, displayTasks} from './taskHandler.js'

export default function project(name) {
    const tasksArray = []; 
    return {
        name: name, 
        createProjectDOM: () => {
            const projectsDisplay = document.querySelector('#projects-display'); 

            const projectDiv = document.createElement('div'); 
            projectDiv.classList.toggle('project-div'); 

            const projectName = document.createElement('p'); 
            projectName.textContent = name; 

            const icon = document.createElement('img'); 
            icon.src = folderIcon; 
            icon.alt = 'Folder Icon'; 

            //event listener for project 
            projectDiv.addEventListener('click', () => {
                const tasksContainer = document.querySelector('#tasks-container'); 
                tasksContainer.innerHTML = ''; 
                document.querySelector('#main-container-display').textContent = name; 
                sortTasks(tasksArray); 
                displayTasks(tasksArray); 
            })

            projectDiv.append(projectName, icon); 

            projectsDisplay.append(projectDiv); 
        },
        addTask: (task) => {
            tasksArray.push(task); 
        },
        getTasks: () => tasksArray, 
    }
}

