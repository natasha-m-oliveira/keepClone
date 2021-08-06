import { RemoveRepeatedDates, sortDates } from "../service/date.js"
import { CreateDate } from "./createDate.js"

export const LoadTasks = () => {
    const list = document.querySelector('[data-list]')

    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) || []

    list.innerHTML = ''
    const uniqueDates = RemoveRepeatedDates(registeredTasks)
    sortDates(uniqueDates)
    uniqueDates.forEach((task => {
        list.appendChild(CreateDate(task))
    }))
}