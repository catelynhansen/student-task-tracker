// Select elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when button clicked
addBtn.addEventListener("click", addTask);

// Optional: add task when Enter key is pressed
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return; // prevent empty tasks

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createTextNode(" " + taskText);

  // Toggle completed class when checkbox clicked
  checkbox.addEventListener("change", function() {
    li.classList.toggle("completed");
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  taskList.appendChild(li);

  input.value = ""; // clear input
  input.focus(); // focus back on input
}


