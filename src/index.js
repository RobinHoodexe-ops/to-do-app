import Todo from "./todo";
import { renderTodo, loadTodos } from "./dom";
import "./styles.css";

// Load existing todos on page load
document.addEventListener("DOMContentLoaded", loadTodos);

document.getElementById("todo-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const notes = document.getElementById("notes").value;

    if (!title) return; // Prevent adding empty todos

    const newTodo = new Todo(title, description, dueDate, priority, notes, false);

    // Save todo to localStorage
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    // Render new todo to the page
    renderTodo(newTodo);

    // Clear form inputs
    document.getElementById("todo-form").reset();
});
