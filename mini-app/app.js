let count = localStorage.getItem("count") || 0;
count = Number(count);

// show saved value on load
updateStatus();

function updateStatus() {
  let text = count === 1 
    ? "Clicked 1 time" 
    : "Clicked " + count + " times";

  document.getElementById("status").textContent = text;
}

function updateButtons() {
  document.getElementById("decreaseBtn").disabled = count === 0;
}

function handleClick() {
  count++;
  localStorage.setItem("count", count);
  updateStatus();
  updateButtons();
}

function decreaseClick() {
  if (count > 0) {
    count--;
    localStorage.setItem("count", count);
  }
  updateStatus();
  updateButtons();
}

function resetClick() {
  count = 0;
  localStorage.setItem("count", count);
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
updateButtons();
