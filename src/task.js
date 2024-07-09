import './style.css'
import {format, parseISO} from 'date-fns';

export default function task(name, details, priority, date, project) {

    return {
        name: name, 
        details: details, 
        priority: priority, 
        date: parseISO(date), 
        project: project,
        createTaskDOM: () => {

            const taskArticle = document.createElement('article'); 
            taskArticle.classList.toggle('task-article'); 
            let color; 
            //color flag
            if (priority === 'urgent') {
                color = 'red'; 
            } else if (priority === 'medium') {
                color = 'orange'; 
            } else {
                color = 'yellow'; 
            }  
            const colorFlag = document.createElement('div'); 
            colorFlag.classList.toggle('color-flag'); 
            colorFlag.style.backgroundColor = color; 
            taskArticle.append(colorFlag); 
    
            //info 
            const taskInfo = document.createElement('div'); 
            taskInfo.classList.toggle('info-container'); 
    
            const taskTitle = document.createElement('h3'); 
            taskTitle.textContent = name; 
            taskInfo.append(taskTitle); 
    
            const taskDetails = document.createElement('p'); 
            if (details !== '') {
                taskDetails.textContent = '\u{2022} ' + details; 
            } else {
                taskDetails.textContent = ''; 
            }
            
            taskInfo.append(taskDetails);
            
            if (project != null && project.name) {
                const taskProject = document.createElement('p'); 
                taskProject.textContent = `From: ${project.name}`; 
                taskInfo.append(taskProject); 
            }
    
            const taskDate = document.createElement('p'); 
            const formattedDate = format(parseISO(date), 'MM-dd-yyyy'); 
            taskDate.textContent = 'Due: ' + formattedDate;
            taskInfo.append(taskDate); 
            
            taskArticle.append(taskInfo); 

            return taskArticle; 
        }
    }
    
}