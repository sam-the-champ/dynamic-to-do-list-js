document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Get tasks from Local Storage and parse them into an array
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        // Add each task to the list
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' ensures tasks are not saved again to Local Storage
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // Check if taskText is not empty
        if (taskText.trim() === "") return;

        // Create a new list item (li)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        removeButton.onclick = function () {
            // Remove the task from the list and Local Storage
            taskList.removeChild(listItem);
            removeTaskFromStorage(taskText);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        listItem.classList.add('task-item');
        taskList.appendChild(listItem);

        // Save the task to Local Storage if 'save' is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the input field
        taskInput.value = "";
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        // Get the tasks from Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        // Remove the task from the array
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        // Save the updated tasks back to Local Storage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Add event listener to add task button
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Add event listener for "Enter" key to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
