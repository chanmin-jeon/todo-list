import './style.css'; 

export default function projectModal() {
    const body = document.querySelector('body'); 

    const projectModal = document.createElement('dialog'); 
    projectModal.id = 'project-modal'; 
    
    const projectForm = document.createElement('form'); 
    projectForm.id = 'project-form'; 

    const inputDiv = document.createElement('div'); 
    inputDiv.id = 'project-input-div'; 

    const projectTitle = document.createElement('label'); 
    projectTitle.setAttribute('for','project-input'); 
    projectTitle.textContent = 'Enter Project Name'; 
    const projectInput = document.createElement('input'); 
    projectInput.id = 'project-input'; 
    projectInput.type = 'text'; 
    projectInput.required = true; 

    const submitProject = document.createElement('button'); 
    submitProject.id = 'submit-project-btn'; 
    submitProject.type = 'submit'; 
    submitProject.textContent = 'Create Project'; 

    inputDiv.append(projectTitle, projectInput, submitProject); 
    projectForm.append(inputDiv); 
    projectModal.append(projectForm); 
    body.append(projectModal); 

    return projectModal;     
}