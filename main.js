const inputTask = document.getElementById('input')
const addbtn = document.getElementById('addtask')
const TaskList = document.getElementById('taskList')


let tasks = JSON.parse(localStorage.getItem('tasks')) || []

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}


function renderTasks() {
    TaskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement('li')
        li.innerHTML = `${task}<button onclick="deleteTask(${index})">Delete</button>`

        TaskList.appendChild(li)

    })
}

function deleteTask(index) {
    tasks.splice(index, 1)
    saveTasks()
    renderTasks()
}

addbtn.addEventListener("click", () => {
    const task = inputTask.value.trim()

    if (task !== "") {
        tasks.push(task)
        saveTasks()
        renderTasks()
        inputTask.value = "";
    }
})

renderTasks()








