import { Task } from "./createTask.js"

export const CreateDate = (date) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const dateMoment = moment(date, 'DD/MM/YYYY')
    const headerDate = document.createElement('li')
    const content = `<p class="content-date">❤ ${dateMoment.format('DD/MM/YYYY')}</p>`

    headerDate.innerHTML = content

    tasks.forEach(((task, id) => {
        const day = moment(task.formattedDate, 'DD/MM/YYYY')
        const diff = dateMoment.diff(day)
        if(diff === 0){
            headerDate.appendChild(Task(task, id))
        }
    }))

    return headerDate
}