const input = document.querySelector(".input");
const tasksList = document.querySelector(".taskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// add Tasks
function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;
    const task = {
        text: taskText
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    displayTasks();
};

// delete tasks
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
};

// edit tasks
function editTask(index) {
    const newTaskText = prompt("Edit the Task: ", tasks[index].text);

    if (newTaskText !== null) {
        tasks[index].text = newTaskText;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();
    }
}

function displayTasks() {
    tasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task.text}</span>
            <div class="buttons">
                <button class="edit-button" onclick="editTask(${index})">Edit</button>
                <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        tasksList.appendChild(li);
    });
};
displayTasks();