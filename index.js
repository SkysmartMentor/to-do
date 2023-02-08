const taskInput = document.querySelector('#task');
const addBtn = document.querySelector('#add');
const taskList = document.querySelector('#task-list');

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const task = taskInput.value;

    if (!task) return;

    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);

    taskInput.value = '';
});