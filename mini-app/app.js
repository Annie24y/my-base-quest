let count = localStorage.getItem("count") || 0;
count = Number(count);

// update status text
function updateStatus() {
  let text = count === 1
    ? "Clicked 1 time"
    : "Clicked " + count + " times";

  document.getElementById("status").textContent = text;
}

// update button state
function updateButtons() {
  document.getElementById("decreaseBtn").disabled = count === 0;
}

// save count
function saveCount() {
  localStorage.setItem("count", count);
}

function handleClick() {
  count++;
  saveCount();
  updateStatus();
  updateButtons();
}

function decreaseClick() {
  if (count > 0) {
    count--;
    saveCount();
  }
  updateStatus();
  updateButtons();
}

function resetClick() {
  count = 0;
  saveCount();
  document.getElementById("status").textContent = "Counter reset";
  updateButtons();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// load dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// initialize
updateStatus();
updateButtons();
