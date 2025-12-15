function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createTextNode(" " + taskText);

  li.appendChild(checkbox);
  li.appendChild(text);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

