import './style.css'; 
import folderIcon from './folderIcon.svg'; 

export default function project(name) {
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

            projectDiv.append(projectName, icon); 

            projectsDisplay.append(projectDiv); 
        }
    }
}
