// 1. Приложение для списка дел

const btnAdd = document.querySelector('.task_add')
const taskList = document.querySelector('.task_list')
const input = document.querySelector('.task_input')

const list = new Map()
let id = 0

const addTask = (name) => {
    let curId = ++id
    list.set(curId, { name: name, isDone: false })
    const newElem = document.createElement('li')
    newElem.className = 'task'
    newElem.innerHTML = `
            <span class="task_name">${name}</span>
            <input type="checkbox" class="task_done">
            <button class="task_delete">x</button>`
    const delBtn = newElem.querySelector('.task_delete')
    delBtn.addEventListener('click', function () {
        list.delete(curId)
        newElem.remove()
    })
    const doneBtn = newElem.querySelector('.task_done')
    doneBtn.addEventListener('click', function () {
        list.get(curId).isDone = !list.get(curId).isDone
        newElem.classList.toggle('done')
    })
    taskList.append(newElem)
}

btnAdd.addEventListener('click', () => addTask(input.value))