import './style.css'; 

export default function createModal() {
    const body = document.querySelector('body'); 

    const label = document.createElement('p'); 
    label.textContent = "Welcome to your todo app!\nLet's get started by entering your name"; 

    const userInfo = document.createElement('dialog'); 
    const userInfoForm = document.createElement('form'); 
    userInfoForm.id = 'start-form'; 

    const userName = document.createElement('label'); 
    userName.setAttribute('for','user-name'); 
    const userInput = document.createElement('input'); 
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('id', 'user-name');
    userInput.required = true; 

    const submitBtn = document.createElement('button'); 
    submitBtn.setAttribute('type', 'submit'); 
    submitBtn.textContent = "Let's Start!"
   
    userInfoForm.append(label, userName, userInput, submitBtn); 
    userInfo.append(userInfoForm); 
    body.append(userInfo); 

    return userInfo; 
}