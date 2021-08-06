const CompleteTask = (update, id) => {
    const registeredTasks = JSON.parse(localStorage.getItem('tasks'))

    registeredTasks[id].completed = !registeredTasks[id].completed

    localStorage.setItem('tasks', JSON.stringify(registeredTasks))

    update()
}

const CompleteButton = (update, id) => {
    const completeButton = document.createElement('button')
    completeButton.classList.add('check-button')
    completeButton.innerHTML = 'Concluir'

    completeButton.addEventListener('click', () => CompleteTask(update, id))

    return completeButton
}

export default CompleteButton