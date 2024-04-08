"use-strict"

const addElement = () => {
    var taskDescription = document.getElementById("task-text");
    
    let description = taskDescription.value;

    if(description === "") {
        console.log("Prosze wpisac cokolwiek");
        return;
    }

    const taskList = document.getElementById("tasks-list");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.classList.add("button");
    removeButton.innerText = "X";
    removeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        if (confirm(`Czy na pewno chcesz usunąć zadanie o treści: ${description}?`)) {
            lastRemovedElement = newTask;
            newTask.remove();
        }
    });

    //console.log(description);

    const newTask = document.createElement("li");
    newTask.innerText = description + " ";
    newTask.appendChild(removeButton);

    

    newTask.addEventListener("click", (event) => {
        const now = new Date();
        const time = `${now.getHours()} : ${now.getMinutes()}`;

        if(event.target.classList.contains("complited")){
            event.target.style.backgroundColor = "";
            event.target.style.textDecoration = "";
            event.target.classList.remove("complited");

            const timestamp = event.target.querySelector('.timestamp');
            if(timestamp) timestamp.remove();
        }
        else {
            event.target.style.backgroundColor = "lightgray";
            event.target.style.textDecoration = "line-through";
            event.target.classList.add("complited");

            const timestamp = document.createElement('span');
            timestamp.classList.add('timestamp');
            timestamp.innerText = `${time}`;
            event.target.appendChild(timestamp);
        }
    });

    taskList.appendChild(newTask);
    taskDescription.value = "";
}


let lastRemovedElement;

const undoRemoval = () => {
    if (lastRemovedElement) {
        const taskList = document.getElementById("tasks-list");
        taskList.insertBefore(lastRemovedElement, taskList.firstChild);
        lastRemovedElement = null;
    }
};

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'z') {
        undoRemoval();
    }
});