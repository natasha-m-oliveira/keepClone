import CompleteButton from './completeTask.js'
import DeleteButton from './deleteTask.js'
import { LoadTasks } from './loadTasks.js'

export const HandleNewItem = (event) => {
    //Previne o envio do formulário e o refresh da página
    event.preventDefault()

    //JSON.parse será responsável por transformar uma string em um objeto
    //as || indicam que caso não tenha nada cadastrado no localStorage atribuiremos um array vazio a variável
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    const input = document.querySelector('[data-form-input]')
    const value = input.value

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value)
    const datetime = date.format('DD/MM/YYYY HH:mm')
    const time = date.format('HH:mm')
    const formattedDate  = date.format('DD/MM/YYYY')
    const completed = false

    //Dados serão passados através do método Destructuring
    const data = {
        value, formattedDate, time, datetime, completed
    }

    // os ... fazem parte do método Destructuring
    const updatedTasks = [...tasks, data]

    //JSON.stringify será responsável por transformar o objeto em uma string
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))

    //Limpar o input
    input.value = ''

    LoadTasks()
}

export const Task = ({value, time, completed}, id) => {
    const task = document.createElement('li')
    
    const content = `<p class="content">${time} ➵ ${value}</p>`

    if(completed){
        task.classList.add('done')
    }

    task.classList.add('task')

    task.innerHTML = content

    //Tornamos o li filho do ul
    task.appendChild(CompleteButton(LoadTasks, id))
    task.appendChild(DeleteButton(LoadTasks, id))

    return task
}