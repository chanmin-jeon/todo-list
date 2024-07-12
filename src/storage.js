export function updateTasksStorage(tasksArray) {
    localStorage.setItem('tasksArrayStorage', JSON.stringify(tasksArray.map(task => ({
        name: task.name,
        details: task.details,
        importance: task.priority,
        date: task.date,
        parentProject: task.parentProject ? task.parentProject.name : null
    }))));
}

export function updateProjectsStorage(projectsArray) {
    localStorage.setItem('projectsArrayStorage', JSON.stringify(projectsArray.map(project => ({
        name: project.name
    }))));
}