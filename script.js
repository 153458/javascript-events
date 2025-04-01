const mouseButton = document.getElementById("mouseButton");
const mouseMessage = document.getElementById("mouseMessage");
mouseButton.addEventListener("mouseover", () => mouseMessage.textContent = "Mouse is over the button!");
mouseButton.addEventListener("mouseout", () => mouseMessage.textContent = "Mouse left the button!");
