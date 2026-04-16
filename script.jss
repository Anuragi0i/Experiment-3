function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent triggering complete toggle
    li.remove();
  });

  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
