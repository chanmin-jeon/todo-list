import './style.css'; 


const articlesArray = []; 

export default function loadMain() {
    const mainContainer = document.querySelector('#task-container'); 

    // new project button
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'btn-container';  
    

    const addProjectBtn = document.createElement('button'); 
    addProjectBtn.id = 'new-project-btn'; 
    addProjectBtn.textContent = 'Add Task'
    buttonContainer.append(addProjectBtn); 
    mainContainer.append(buttonContainer); 

    //project container 
    const projectsContainer = document.createElement('div'); 
    projectsContainer.id = 'projects-container'; 
    mainContainer.append(projectsContainer); 

}