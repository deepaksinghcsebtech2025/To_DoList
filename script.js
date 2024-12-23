<<<<<<< HEAD
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
=======
document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", function () {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            addTodoItem(todoText);
            todoInput.value = "";
        }
    });

    function addTodoItem(text) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${text}</span>
            <button class="delete-button">Delete</button>
        `;

        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        todoList.appendChild(listItem);
    }
});
>>>>>>> 29f73bf56b14e871d5256c87bd87209860164677
