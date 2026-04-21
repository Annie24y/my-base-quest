
let count = localStorage.getItem("count") || 0;
count = Number(count);

// show saved value on load
document.getElementById("status").textContent =
  "Clicked " + count + " times";

function handleClick() {
  count++;
  localStorage.setItem("count", count);
  document.getElementById("status").textContent =
    "Clicked " + count + " times";
}

function decreaseClick() {
  if (count > 0) {
    count--;
    localStorage.setItem("count", count);
    document.getElementById("status").textContent =
      "Clicked " + count + " times";
  }
}

function resetClick() {
  count = 0;
  localStorage.setItem("count", count);
  document.getElementById("status").textContent =
    "Counter reset";
}
