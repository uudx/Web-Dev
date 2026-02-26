const list = document.getElementById("list");
const taskInput = document.getElementById("taskInput");

const totalCount = document.getElementById("total");
const doneCount = document.getElementById("completed");
const deletedCount = document.getElementById("deleted");

let deleted = 0;

function updateStats() {
  const items = list.querySelectorAll(".item");
  const doneItems = list.querySelectorAll(".item.done");

  totalCount.textContent = items.length;
  doneCount.textContent = doneItems.length;
  deletedCount.textContent = deleted;
}

list.addEventListener("change", function (e) {
  if (e.target.type === "checkbox") {
    e.target.parentElement.classList.toggle("done");
    updateStats();
  }
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    deleted++;
    updateStats();
  }
});

function addItem() {
  const text = taskInput.value.trim();
  if (!text) return;

  const item = document.createElement("div");
  item.className = "item";

  item.innerHTML = `
    <input type="checkbox">
    <span class="text">${text}</span>
    <span class="delete">🗑</span>
  `;

  list.appendChild(item);
  taskInput.value = "";
  updateStats();
}

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

updateStats();
