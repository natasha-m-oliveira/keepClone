import { HandleNewItem } from './components/createTask.js'
import { LoadTasks } from './components/loadTasks.js'

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', HandleNewItem)

LoadTasks()