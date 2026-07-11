/* 2.2 User Profile Validator
Create two separate modules:

UserValidator — validates data:
isValidEmail(email) — returns true/false
isValidPassword(password) — returns true/false (min 8 chars)
validateUser(userData) — checks all fields, returns object with errors

UserDisplay — handles UI feedback:
showError(field, message) — displays error on page
showSuccess() — displays success message
handleFormSubmit(formData) — calls validator, then displays results

Constraint: UserValidator should NOT touch the DOM. UserDisplay should NOT do validation logic.
*/

// DOM elements
const email = document.getElementById("email");
const emailError = document.querySelector("#emailError");

const password = document.getElementById("password");
const passwordError = document.querySelector("#passwordError");

const successMessage = document.getElementById("successMessage");

const submitButton = document.querySelector("button");

// UserValidator Module
const UserValidator = (() => {
  const regex =
    /^[a-zA-Z][a-zA-Z0-9_-]*(\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]+$/;
  const emailEntered = email.value;
  const passwordEntered = password.value;

  const userData = {
    email: `${emailEntered}`,
    password: `${passwordEntered}`,
  };

  const userError = {
    emailErr: "Error: Invalid email entered.",
    passwordErr: "Error: Password must contain at minimum 8 characters.",
  };

  const isValidEmail = (email) => {
    return regex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const validateUser = (userData) => {
    if (!isValidEmail(userData.email)) {
      return userError.emailErr;
    }

    if (!isValidPassword(userData.password)) {
      return userError.passwordErr;
    }
    return true;
  };

  return { userData, userError, isValidPassword, isValidEmail, validateUser };
})();

// UserDisplay Module
const UserDisplay = (() => {
  const userValidated = UserValidator;
  const errors = userValidated.userError;

  const showError = (field, message) => {
    if (field === "email") {
      message = errors.emailErr;
      email.textContent = message;
    }

    if (field === "password") {
      message = errors.password;
      password.textContent = message;
    }
  };

  const showSuccess = () => {
    if (userValidated.validateUser) {
      successMessage.style.visibility = "visible";
    }
  };
  return { showError, showSuccess };
})();

submitButton.addEventListener("click", (e) => {
  UserDisplay.showSuccess();
  e.preventDefault();
});

// console.log(isValidEmail("khepburn242@gmail.com"));
