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
