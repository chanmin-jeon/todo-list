import './style.css'; 
import icon from './checklist.svg'; 

export default function loadNav(userName) {
    const sidebar = document.querySelector('#sidebar'); 


    const displayDiv = document.createElement('div'); 
    displayDiv.id = 'display-div'; 

    const nameDisplay = document.createElement('h3'); 
    nameDisplay.textContent = userName; 

    const iconDisplay = document.createElement('img'); 
    iconDisplay.src = icon; 
    iconDisplay.alt = 'Icon'; 

    displayDiv.append(iconDisplay, nameDisplay); 
    sidebar.append(displayDiv); 
    
    const sidebarSections = [
        {title: 'Inbox'},
        {title: 'Today'}, 
        {title: 'This Week'}
    ]; 
    sidebarSections.forEach((section) => {
        const sectionBtn = document.createElement('button'); 
        sectionBtn.classList.toggle('sidebar-btn'); 
        sectionBtn.textContent = section.title; 
        sidebar.append(sectionBtn); 
    }); 
}