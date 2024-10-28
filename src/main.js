import "./index.css";
import SingleTask from "./components/SingleTask";
import { titleCase } from "./utils";

const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const taskContainerEl = document.querySelector("[data-task-container]");

const tasks = [];

function renderTask() {
  taskContainerEl.innerHTML = "";
  const frag = document.createDocumentFragment();
  tasks.forEach((task) => {
    frag.appendChild(SingleTask(task.task, task.isCompleted));
  });
  taskContainerEl.appendChild(frag);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;

  const newTask = {
    task: titleCase(inputEl.value),
    isCompleted: true,
    id: tasks.length,
  };

  tasks.unshift(newTask);

  renderTask();

  console.log(tasks);
  
  inputEl.value = "";
});

const showYear = document.querySelector(".show-year");
showYear.textContent = new Date().getFullYear();