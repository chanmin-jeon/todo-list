import './style.css'; 

export default function taskModal() {
    
    const newModal = document.createElement('dialog'); 
    const taskForm = document.createElement('form'); 
    taskForm.id = 'task-form'; 

    // get task title 
    const titleLabel = document.createElement('label'); 
    titleLabel.setAttribute('for','task-title'); 
    titleLabel.textContent = 'Enter Task Title:'; 
    const title = document.createElement('input');
    title.id = 'task-title'; 
    title.required = true; 
    title.setAttribute('type', 'text');
    taskForm.append(titleLabel, title); 
    
    // get task details
    const detailsLabel = document.createElement('label'); 
    detailsLabel.setAttribute('for','task-details'); 
    detailsLabel.textContent = 'Enter Task Details:'; 
    const details = document.createElement('input');
    details.id = 'task-details'; 
    details.required = false; 
    details.setAttribute('type', 'text');
    taskForm.append(detailsLabel, details); 
    
    
    // get task date
    const dateLabel = document.createElement('label'); 
    dateLabel.setAttribute('for','task-date'); 
    dateLabel.textContent = 'Enter Task Due Date:'; 
    const date = document.createElement('input');
    date.id = 'task-date'; 
    date.required = true; 
    date.setAttribute('type', 'date');
    taskForm.append(dateLabel, date); 
    
    // get task priority
    const priorityLabel = document.createElement('label'); 
    priorityLabel.setAttribute('for','task-priority'); 
    priorityLabel.textContent = 'Select Task Priority:'; 
    const priority = document.createElement('select');
    priority.id = 'task-priority'; 
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
    taskForm.append(priorityLabel, priority); 

    // create button 

    const createBtn = document.createElement('button');
    createBtn.id = 'create-btn';
    createBtn.textContent = 'Create Task';
    createBtn.type = 'submit';
    taskForm.append(createBtn);

    newModal.append(taskForm); 
    document.querySelector('body').append(newModal); 
    
    return newModal; 
}
