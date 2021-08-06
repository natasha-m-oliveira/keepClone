const DeleteTask = (update, id) => {
    const registeredTasks = JSON.parse(localStorage.getItem('tasks'))
    registeredTasks.splice(id, 1)
    localStorage.setItem('tasks', JSON.stringify(registeredTasks))

    update()
}

const DeleteButton = (update, id) => {
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = 'Deletar'

    deleteButton.addEventListener('click', () => DeleteTask(update, id))

    return deleteButton
}

export default DeleteButton