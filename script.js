document.getElementById('addTask').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');

    const taskBox = document.createElement('div');
    taskBox.className = 'task-box';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => {
        const newText = prompt('Edit your task:', taskContent.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskContent.textContent = newText.trim();
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
        taskBox.remove();
    };

    taskBox.appendChild(editBtn);
    taskBox.appendChild(taskContent);
    taskBox.appendChild(deleteBtn);

    taskList.appendChild(taskBox);
    taskInput.value = '';
}
