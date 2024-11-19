// 1. Приложение для списка дел

const btnAdd = document.querySelector('.task_add')
const taskList = document.querySelector('.task_list')
const input = document.querySelector('.task_input')

const list = new Map()
let id = 0

const addTask = (name) => {
    list.set(++id, { name: name, isDone: false })
    const newElem = document.createElement('li')
    newElem.className = 'task'
    newElem.innerHTML = `
            <span class="task_name">${name}</span>
            <input type="checkbox" class="task_done">
            <button class="task_delete"></button>`
    taskList.append(newElem)
    console.log(list)
}

btnAdd.addEventListener('click', () => addTask(input.value))