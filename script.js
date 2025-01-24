// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the trimmed value of the task input field
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        
        // Add the 'remove-btn' class to the remove button using classList.add
        removeButton.classList.add('remove-btn');

        // Add event listener to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove the task from the list
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Add a 'task-item' class to the list item using classList.add
        listItem.classList.add('task-item');

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // Add click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener to the task input for "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when the "Enter" key is pressed
        }
    });
});
