import './style.css'
 
export default function project(name, details, priority, date) {

    return {
        name: name, 
        details: details, 
        priority: priority, 
        date: date, 
        createProjectDOM: () => {

            const projectArticle = document.createElement('article'); 
            projectArticle.classList.toggle('project-article'); 
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
            projectArticle.append(colorFlag); 
    
            //info 
            const projectInfo = document.createElement('div'); 
            projectInfo.classList.toggle('info-container'); 
    
            const projectTitle = document.createElement('h3'); 
            projectTitle.textContent = name; 
    
            const projectDetails = document.createElement('p'); 
            projectDetails.textContent = details; 
    
            const projectDate = document.createElement('p'); 
            projectDate.textContent = date; 
    
            projectInfo.append(projectTitle); 
            projectInfo.append(projectDetails);
            projectInfo.append(projectDate); 
            
            projectArticle.append(projectInfo); 

            console.log(name, details, priority, date); 
            return projectArticle; 
        }
    }
    
}