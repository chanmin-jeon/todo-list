import './style.css'; 

export default function projectModal() {
    
    const newModal = document.createElement('dialog'); 
    const projectForm = document.createElement('form'); 
    projectForm.id = 'project-form'; 

    // get project title 
    const titleLabel = document.createElement('label'); 
    titleLabel.setAttribute('for','project-title'); 
    titleLabel.textContent = 'Enter Project Title:'; 
    const title = document.createElement('input');
    title.id = 'project-title'; 
    title.required = true; 
    title.setAttribute('type', 'text');
    projectForm.append(titleLabel, title); 
    
    // get project details
    const detailsLabel = document.createElement('label'); 
    detailsLabel.setAttribute('for','project-details'); 
    detailsLabel.textContent = 'Enter Project Details:'; 
    const details = document.createElement('input');
    details.id = 'project-details'; 
    details.required = false; 
    details.setAttribute('type', 'text');
    projectForm.append(detailsLabel, details); 
    
    
    // get project date
    const dateLabel = document.createElement('label'); 
    dateLabel.setAttribute('for','project-date'); 
    dateLabel.textContent = 'Enter Project Due Date:'; 
    const date = document.createElement('input');
    date.id = 'project-date'; 
    date.required = true; 
    date.setAttribute('type', 'date');
    projectForm.append(dateLabel, date); 
    
    // get project priority
    const priorityLabel = document.createElement('label'); 
    priorityLabel.setAttribute('for','project-priority'); 
    priorityLabel.textContent = 'Select Project Priority:'; 
    const priority = document.createElement('select');
    priority.id = 'project-priority'; 
    priority.name = 'options'; 
    priority.required = true; 
        // set options 
    const urgent = document.createElement('option'); 
    urgent.value = 'urgent'; 
    urgent.textContent = 'Urgent'
    const medium = document.createElement('option'); 
    medium.value = 'medium'; 
    medium.textContent = 'Medium'; 
    const low = document.createElement('option'); 
    low.value = 'low'; 
    low.textContent = 'Low'
    priority.append(urgent, medium, low); 
    projectForm.append(priorityLabel, priority); 

    // create button 

    const createBtn = document.createElement('button');
    createBtn.id = 'create-btn';
    createBtn.textContent = 'Create Project';
    createBtn.type = 'submit';
    projectForm.append(createBtn);

    newModal.append(projectForm); 
    document.querySelector('body').append(newModal); 
    
    return newModal; 
}
