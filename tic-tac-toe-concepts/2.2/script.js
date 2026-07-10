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
