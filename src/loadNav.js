import './style.css'; 
import icon from './checklist.svg'; 
import plusIcon from './plusIcon.svg'; 

export default function loadNav() {
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
}