var tasks = [];

document.querySelector("#button-add-task").addEventListener("click", addTask);

function addTask() {
    var title = document.querySelector("#title").value;
    var description = document.querySelector("#description").value;

    if (title == "" || description == "") {
        alert("Fill in all fields");
        return;
    }

    tasks.push({
        title: title,
        description: description,
        completed: false
    });

    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";

    showTasks();
}

function showTasks() {
    var list = document.querySelector("#task-list");
    list.textContent = "";

    for (var i = 0; i < tasks.length; i++) {
        var item = document.createElement("li");

        var title = document.createElement("span");
        title.textContent = tasks[i].title;
        title.className = "task-title";

        if (tasks[i].completed) {
            title.className = "task-title completed";
        }

        var description = document.createElement("p");
        description.textContent = tasks[i].description;
        description.className = "task-description";

        var complete = document.createElement("button");
        complete.textContent = "✓";
        complete.onclick = createComplete(i);

        var remove = document.createElement("button");
        remove.textContent = "×";
        remove.className = "delete";
        remove.onclick = createDelete(i);

        var buttons = document.createElement("div");
        buttons.className = "task-buttons";

        buttons.appendChild(complete);
        buttons.appendChild(remove);

        item.appendChild(title);
        item.appendChild(buttons);
        item.appendChild(description);

        list.appendChild(item);
    }
}

function createComplete(index) {
    return function () {
        tasks[index].completed = !tasks[index].completed;
        showTasks();
    };
}

function createDelete(index) {
    return function () {
        tasks.splice(index, 1);
        showTasks();
    };
}