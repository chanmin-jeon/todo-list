import './style.css'; 


const articlesArray = []; 

export default function loadMain() {
    const mainContainer = document.querySelector('#main-container'); 

    // new task button
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'btn-container';  
    

    const addTaskBtn = document.createElement('button'); 
    addTaskBtn.id = 'new-task-btn'; 
    addTaskBtn.textContent = 'Add Task'
    buttonContainer.append(addTaskBtn); 
    mainContainer.append(buttonContainer); 

    //tasks container 
    const tasksContainer = document.createElement('div'); 
    tasksContainer.id = 'tasks-container'; 
    mainContainer.append(tasksContainer); 

}