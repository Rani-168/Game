let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask(){

    if(taskInput.value === ""){
        alert("Enter task");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = taskInput.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    // checkbox completed style
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            span.classList.add("completed");
        }else{
            span.classList.remove("completed");
        }
    });

    // delete task
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}