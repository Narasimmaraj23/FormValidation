const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (nameValue === "") {
    setError(username, "Name cannot be empty!");
  } else if (nameValue.length < 5) {
    setError(username, "Name must be at least 5 characters.");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be empty!");
  } else if (!emailValue.includes("@")) {
    setError(email, "Enter a valid email address.");
  } else {
    setSuccess(email);
  }

  if (phoneValue.length !== 10 || phoneValue === "123456789") {
    setError(phone, "Enter a valid 10-digit phone number.");
  } else {
    setSuccess(phone);
  }

  if (
    passwordValue === "password" ||
    passwordValue === nameValue ||
    passwordValue.length < 8
  ) {
    setError(password, "Password is not strong enough.");
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "" || passwordValue !== confirmPasswordValue) {
    setError(confirmPassword, "Passwords do not match.");
  } else {
    setSuccess(confirmPassword);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
