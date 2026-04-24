// Retrieve todo from local storage or initialise an empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");

// Initialise
document.addEventListener("DOMContentLoaded", 
    function() {
        addButton.addEventListener("click", addTask();
        todoInput.addEventListener("keydown", function(event) {
            if (event.key == "Enter") {
                event.preventDefault();
                addTask();
            }
        })
    }
)

function addTask() {

}