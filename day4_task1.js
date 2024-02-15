document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Display tasks
    function displayTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.name;
            if (task.completed) {
                li.classList.add("completed");
            }
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                deleteTask(index);
            });
            li.appendChild(deleteBtn);
            li.addEventListener("click", () => {
                toggleTask(index);
            });
            taskList.appendChild(li);
        });
    }

    // Add task
    function addTask() {
        const taskName = taskInput.value.trim();
        if (taskName !== "") {
            tasks.push({ name: taskName, completed: false });
            displayTasks();
            saveTasks();
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    }

    // Delete task
    function deleteTask(index) {
        tasks.splice(index, 1);
        displayTasks();
        saveTasks();
    }

    // Toggle task completion
    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        displayTasks();
        saveTasks();
    }

    // Save tasks to local storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Event listeners
    addTaskBtn.addEventListener("click", addTask);

    // Initial display
    displayTasks();
});