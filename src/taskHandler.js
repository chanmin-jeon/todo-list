import './style.css'; 
import {isToday, compareAsc, addWeeks, isBefore, isSameDay, startOfDay, isAfter} from 'date-fns'

export function displayAllTasks(tasksArray) {
    const tasksContainer = document.querySelector('#tasks-container'); 
    tasksContainer.innerHTML = '';

    for (const article of tasksArray) {
        tasksContainer.append(article.createTaskDOM()); 
    }
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
  const today = new Date();
  const tasksContainer = document.querySelector('#tasks-container');
  tasksContainer.innerHTML = '';

  for (const article of tasksArray) {
    if (isBefore(article.date, today)) {
      tasksContainer.append(article.createTaskDOM());
    }
  }
}
