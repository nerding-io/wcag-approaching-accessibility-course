/* Example 4 */
const links = document.querySelectorAll("#example-4 nav a");

links.forEach((link) => {
  if (link.getAttribute("href") === window.location.pathname) {
    link.classList.add("active");
  }
});

/* Example 6 */
const marquee = document.querySelector("marquee");

marquee.addEventListener("mouseenter", () => {
  marquee.stop();
});

marquee.addEventListener("mouseleave", () => {
  marquee.start();
});

/* Example 7 */
const ex7form = document.querySelector("#example-7 form");
const ex7nameInput = document.getElementById("#example-7 name");
const ex7emailInput = document.getElementById("#example-7 email");
const ex7passwordInput = document.getElementById("#example-7 password");
const ex7errorMessages = document.querySelectorAll("#example-7 .error-message");
const ex7formMessage = document.querySelector("#example-7 .form-message");

ex7form.addEventListener("submit", (event) => {
  event.preventDefault();

  let hasErrors = false;

  if (ex7nameInput.value === "") {
    ex7errorMessages[0].textContent = "Name is required";
    hasErrors = true;
  } else {
    ex7errorMessages[0].textContent = "";
  }

  if (ex7emailInput.value === "") {
    ex7errorMessages[1].textContent = "Email is required";
    hasErrors = true;
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    errorMessages[1].textContent = "Email is invalid";
    hasErrors = true;
  } else {
    ex7errorMessages[1].textContent = "";
  }

  if (ex7passwordInput.value === "") {
    ex7errorMessages[2].textContent = "Password is required";
    hasErrors = true;
  } else if (ex7passwordInput.value.length < 8) {
    ex7errorMessages[2].textContent = "Password must be at least 8 characters";
    hasErrors = true;
  } else {
    ex7errorMessages[2].textContent = "";
  }

  if (hasErrors) {
    ex7errorMessages.textContent = "There were errors in the form";
  } else {
    ex7errorMessages.textContent = "Form submitted successfully";
  }
});

/* Example 9 */
const skipLink = document.querySelector("#example-9 .skip-link");
const main = document.querySelector("#example-9 main");
const navLinks = document.querySelectorAll("#example-9 header nav a");

skipLink.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    main.focus();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("keydown", (event) => {
    console.log(event.keyCode);
    if (event.altKey && event.keyCode >= 49 && event.keyCode <= 52) {
      const index = event.keyCode - 49;
      const section = document.querySelectorAll("main section")[index];
      section.setAttribute("tabindex", "-1");
      section.focus();
    }
  });
});

/* Example 16 */
const decreaseButton = document.querySelector(
  "#example-16 button:first-of-type"
);
const increaseButton = document.querySelector(
  "#example-16 button:last-of-type"
);
const ex6text = document.querySelector("p:last-of-type");

decreaseButton.addEventListener("click", () => {
  const currentSize = window.getComputedStyle(ex6).fontSize;
  const newSize = parseInt(currentSize) - 2 + "px";
  ex6.style.fontSize = newSize;
});

increaseButton.addEventListener("click", () => {
  const currentSize = window.getComputedStyle(ex6).fontSize;
  const newSize = parseInt(currentSize) + 2 + "px";
  ex6.style.fontSize = newSize;
});
