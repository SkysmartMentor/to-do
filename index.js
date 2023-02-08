const taskInput = document.querySelector('.form-task');
const addBtn = document.querySelector('#add');
const taskList = document.querySelector('#task-list');

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const task = taskInput.value;

    if (!task) return;

    const newItem = document.querySelector('#template').cloneNode(true).content;

    newItem.querySelector('.item__text').value = task;
    newItem.querySelector('.item__delete').addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.parentElement;
        target.remove();
        
    });

    taskList.append(newItem);

    taskInput.value = '';
});