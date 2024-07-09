import './style.css'; 
import icon from './checklist.svg'; 
import plusIcon from './plusIcon.svg'; 
import pencil from './pencil.svg'

export default function loadPage() {
    /* create Side Bar */ 
    const sidebar = document.querySelector('#sidebar'); 

    const displayDiv = document.createElement('div'); 
    displayDiv.id = 'display-div'; 

    // icon and app title 
    const toDoDisplay = document.createElement('h3'); 
    toDoDisplay.textContent = 'To-Do List'; 

    const iconDisplay = document.createElement('img'); 
    iconDisplay.src = icon; 
    iconDisplay.alt = 'Icon'; 

    displayDiv.append(iconDisplay, toDoDisplay); 
    sidebar.append(displayDiv); 

    // add task button 
    const addTaskDisplay = document.createElement('div'); 
    addTaskDisplay.id = 'add-task-display'; 
    const addTaskBtn = document.createElement('button'); 
    addTaskBtn.id = 'new-task-btn'; 
    addTaskBtn.textContent = 'Add Task'
    const addTaskIMG = document.createElement('img'); 
    addTaskIMG.src = pencil;  
    addTaskIMG.alt = 'pencil icon'; 

    addTaskDisplay.append(addTaskBtn,addTaskIMG); 
    
    sidebar.append(addTaskDisplay); 
    
    // sidebar buttons 
    const sidebarSections = [
        {title: 'Inbox', id:'inbox-btn'},
        {title: 'Today', id: 'today-btn'}, 
        {title: 'This Week', id: 'week-btn'},
        {title: 'Overdue', id: 'overdue-btn'}
    ]; 

    sidebarSections.forEach((section) => {
        const sectionBtn = document.createElement('button'); 
        sectionBtn.classList.toggle('sidebar-btn'); 
        sectionBtn.textContent = section.title; 
        sectionBtn.id = section.id; 
        sidebar.append(sectionBtn); 
    }); 

    // parent projects 
    const newProject = document.createElement('div'); 
    newProject.id = 'sidebar-project'; 
    const plus = document.createElement('img'); 
    plus.src = plusIcon; 
    plus.alt = 'Plus Icon'; 
    const newProjectHeader = document.createElement('h4'); 
    newProjectHeader.textContent = 'Projects'
    newProject.append(newProjectHeader, plus); 

    const projectsDisplay = document.createElement('div'); 
    projectsDisplay.id = 'projects-display'; 
    sidebar.append(newProject, projectsDisplay); 

    /*create main Container */ 
    const mainContainer = document.querySelector('#main-container'); 

    const mainContainerDisplay = document.createElement('div'); 
    mainContainerDisplay.id = 'main-container-display'; 
    mainContainerDisplay.textContent = 'Inbox'; 

    //tasks container 
    const tasksContainer = document.createElement('div'); 
    tasksContainer.id = 'tasks-container'; 
    mainContainer.append(mainContainerDisplay, tasksContainer); 
}