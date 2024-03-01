function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    var li = document.createElement("li");

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    var span = document.createElement("span");
    span.textContent = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

function clearAll() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}

function toggleMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}


