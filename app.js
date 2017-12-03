const taskList = document.querySelector('.js-tasks-list')
const input = document.querySelector('.js-input')
const form = document.querySelector('.js-form')

const tasks = []

// Get data from localStorage
for (let i = 0; i < localStorage.length; i++) {
  tasks.push(localStorage.key(i))
}

function addTask (taskName) {
  taskList.innerHTML += `<li>${taskName}</li>`
}

function renderList () {
  tasks.forEach(function (task) {
    addTask(task)
  })
}

renderList()

form.addEventListener('submit', function (e) {
  e.preventDefault()
  if (input.value.length > 0) {
    localStorage.setItem(input.value, input.value)
    addTask(input.value)
    input.value = ''
    input.focus()
  }
  return false
})
