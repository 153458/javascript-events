const mouseButton = document.getElementById("mouseButton");
const mouseMessage = document.getElementById("mouseMessage");
mouseButton.addEventListener("mouseover", () => mouseMessage.textContent = "Mouse is over the button!");
mouseButton.addEventListener("mouseout", () => mouseMessage.textContent = "Mouse left the button!");

const keyInput = document.getElementById("keyInput");
const keyMessage = document.getElementById("keyMessage");
keyInput.addEventListener("keyup", (event) => keyMessage.textContent = event.key);

const eventForm = document.getElementById("eventForm");
const formMessage = document.getElementById("formMessage");
eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Form submitted successfully!";
});

const focusInput = document.getElementById("focusInput");
const focusMessage = document.getElementById("focusMessage");
focusInput.addEventListener("focus", () => focusMessage.textContent = "Input is focused!");
focusInput.addEventListener("blur", () => focusMessage.textContent = "Input lost focus!");
