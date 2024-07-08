import './style.css'; 

export default function displayAllTasks(projectsArray) {
    const tasksContainer = document.querySelector('#projects-container'); 
    console.log(tasksContainer.id); 
    for (const article of projectsArray) {
        tasksContainer.append(article.createProjectDOM()); 
    }
}