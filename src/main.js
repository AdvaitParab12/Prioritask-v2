import "./index.css";
import SingleTask from "./components/SingleTask";
import { titleCase } from "./utils";

const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const taskContainerEl = document.querySelector("[data-task-container]");

const state = [];

function renderTask() {
  taskContainerEl.innerHTML = "";
  const frag = document.createDocumentFragment();
  state.forEach((task) => {
    frag.appendChild(SingleTask(task.task, task.isCompleted,task.id));
  });
  taskContainerEl.appendChild(frag);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;

  const newTask = {
    task: titleCase(inputEl.value),
    isCompleted: false,
    id: state.length,
  };

  state.unshift(newTask);
  
  renderTask();

  inputEl.value = "";
});

taskContainerEl.addEventListener("click",(e)=>{
  console.log(e.target.id)
  
})

const showYear = document.querySelector(".show-year");
showYear.textContent = new Date().getFullYear();
