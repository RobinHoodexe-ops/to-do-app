const renderTodo = (todo) => {
    const mainDiv = document.getElementById("content");
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const title = document.createElement("h2");
    title.textContent = todo.title;
    todoDiv.appendChild(title);

    const description = document.createElement("p");
    description.textContent = todo.description;
    todoDiv.appendChild(description);

    const dueDate = document.createElement("p");
    dueDate.textContent = `Due: ${todo.dueDate}`;
    todoDiv.appendChild(dueDate);

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${todo.priority}`;
    todoDiv.appendChild(priority);

    const notes = document.createElement("p");
    notes.textContent = todo.notes;
    todoDiv.appendChild(notes);

    mainDiv.appendChild(todoDiv);
};

// Function to load saved todos from localStorage
const loadTodos = () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach(renderTodo);
};

export { renderTodo, loadTodos };
