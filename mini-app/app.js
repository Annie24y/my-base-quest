let count = localStorage.getItem("count") || 0;
count = Number(count);

// show saved value on load
document.getElementById("status").textContent =
  "Clicked " + count + " times";

function updateButtons() {
  document.getElementById("decreaseBtn").disabled = count === 0;
}

function handleClick() {
  count++;
  localStorage.setItem("count", count);
  document.getElementById("status").textContent =
    "Clicked " + count + " times";
  updateButtons();
}

function decreaseClick() {
  if (count > 0) {
    count--;
    localStorage.setItem("count", count);
    document.getElementById("status").textContent =
      "Clicked " + count + " times";
  }
  updateButtons();
}

function resetClick() {
  count = 0;
  localStorage.setItem("count", count);
  document.getElementById("status").textContent =
    "Counter reset";
  updateButtons();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// initialize
updateButtons();
