import './style.css'; 
import { updateTasksStorage, updateProjectsStorage } from './storage.js';
import {isToday, compareAsc, addWeeks, isBefore, isSameDay, startOfDay, isAfter} from 'date-fns'

export function displayTasks(tasksArray) {
    const tasksContainer = document.querySelector('#tasks-container'); 
    tasksContainer.innerHTML = '';
    for (const article of tasksArray) {
      const articleDisplay = article.createTaskDOM(tasksArray); 
      tasksContainer.append(articleDisplay); 
    }
}


export function removeTask(task, tasksArray) {
      // Remove from project array if applicable
      if (task.project) {
          const parentProjectArray = task.project.getTasks();
          const projectIndex = parentProjectArray.findIndex(t => t === task);
          if (projectIndex !== -1) {
              parentProjectArray.splice(projectIndex, 1);
          }
      }

      // Remove from main tasks array
      const mainIndex = tasksArray.findIndex(t => t === task);
      if (mainIndex !== -1) {
          tasksArray.splice(mainIndex, 1);
      }

      updateTasksStorage(tasksArray);
      sortTasks(tasksArray);
      displayTasks(tasksArray);
}

export function sortTasks(tasksArray) {
    tasksArray.sort((a, b) => compareAsc(a.date, b.date));

}

export function displayToday(tasksArray) {
    const tasksContainer = document.querySelector('#tasks-container'); 
    tasksContainer.innerHTML = '';

    for (const article of tasksArray) {
      if (isToday(article.date)) {
        tasksContainer.append(article.createTaskDOM());
      }
    }
  }

  export function displayWeek(tasksArray) {
    const today = startOfDay(new Date());
    const nextWeek = addWeeks(today, 1);
    const tasksContainer = document.querySelector('#tasks-container');
    tasksContainer.innerHTML = '';
  
    for (const article of tasksArray) {
      if (
        (isAfter(article.date, today) || isSameDay(article.date, today)) &&
        isBefore(article.date, nextWeek)
      ) {
        tasksContainer.append(article.createTaskDOM());
      }
    }
  }

  export function displayOverdue(tasksArray) {
    const today = startOfDay(new Date());
    const tasksContainer = document.querySelector('#tasks-container');
    tasksContainer.innerHTML = '';

    for (const article of tasksArray) {
        if (isBefore(article.date, today) && !isToday(article.date)) {
            tasksContainer.append(article.createTaskDOM());
        }
    }
}


