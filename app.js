document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const dueDateInput = document.getElementById('due-date');

    // Handle form submission
    if (taskForm) {
        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const taskText = taskInput.value.trim();
            const dueDate = dueDateInput.value;

            if (taskText === '') {
                alert('Please enter a task!');
                return;
            }

            addTask(taskText, dueDate);
            taskInput.value = '';
            dueDateInput.value = '';
        });
    }

    // Function to add task to the list
    function addTask(taskText, dueDate) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
            <span class="due-date">${dueDate ? 'Due: ' + dueDate : ''}</span>
        `;

        taskList.appendChild(li);

        // Handle complete button click
        const completeBtn = li.querySelector('.complete-btn');
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
            completeBtn.textContent = li.classList.contains('completed') ? 'Undo' : 'Complete';
        });

        // Handle delete button click
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
    }
});
