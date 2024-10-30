import "./index.css";
import SingleTask from "./components/SingleTask";
import { titleCase, randomID } from "./utils";

const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const taskContainerEl = document.querySelector("[data-task-container]");

let state = [];

// Load tasks from local storage
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    state = JSON.parse(savedTasks);
    renderTask();
  }
}

// Save tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(state));
}

function toggleCompleted(id) {
  state = state.map((task) => {
    if (task.id === id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
  saveTasks(); // Save the updated state
}

function renderTask() {
  taskContainerEl.innerHTML = "";
  const frag = document.createDocumentFragment();
  state.forEach((task) => {
    frag.appendChild(SingleTask(task.task, task.isCompleted, task.id));
  });
  taskContainerEl.appendChild(frag);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;
  const newTask = {
    task: titleCase(inputEl.value),
    isCompleted: false,
    id: randomID(),
  };
  state.unshift(newTask);
  saveTasks(); // Save the new task
  renderTask();
  inputEl.value = "";
});

taskContainerEl.addEventListener("click", (e) => {
  toggleCompleted(e.target.id);
  state.sort((a, b) => a.isCompleted - b.isCompleted);
  renderTask();
});

// Show current year
const showYear = document.querySelector(".show-year");
showYear.textContent = new Date().getFullYear();

// Load tasks when the app starts
loadTasks();
