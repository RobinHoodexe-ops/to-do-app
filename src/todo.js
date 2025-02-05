

class Todo {
    constructor(title, description, dueDate, priority, notes, completed) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = completed;
    }

    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getDueDate() {
        return this.dueDate;
    }
    getPriority() {
        return this.priority;
    }
    getNotes() {
        return this.notes;
    }
    getCompleted() {
        return this.completed;
    }

    setCompleted(completed) {
        this.completed = completed;
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }
    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
    setPriority(priority) {
        this.priority = priority;
    }
    setNotes(notes) {
        this.notes = notes;
    }
    setCompleted(completed) {
        this.completed = completed;
    }
    render() {
        const mainDiv = document.getElementById("content");
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const title = document.createElement("h2");
        title.classList.add("title");
        title.textContent = this.title;
        todoDiv.appendChild(title);

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = this.description;
        todoDiv.appendChild(description);

        const dueDate = document.createElement("p");
        dueDate.classList.add("dueDate");
        dueDate.textContent = this.dueDate;
        todoDiv.appendChild(dueDate);

        const priority = document.createElement("p");
        priority.classList.add("priority");
        priority.textContent = this.priority;
        todoDiv.appendChild(priority);

        const notes = document.createElement("p");
        notes.classList.add("notes");
        notes.textContent = this.notes;
        todoDiv.appendChild(notes);

        const completed = document.createElement("p");
        completed.classList.add("completed");
        completed.textContent = this.completed;
        todoDiv.appendChild(completed);

        mainDiv.appendChild(todoDiv);
    }
}






export default Todo;