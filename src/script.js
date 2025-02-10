const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { id: 1, username: "hello@world.com", password: "badpassword" },
  { id: 2, username: "test@user.com", password: "badpassword" },
  { id: 3, username: "email@domain.com", password: "badpassword" },
];
const renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
};
const renderError = () => {
  document.getElementById("error-message").hidden = false;
};
const resetMessage = () => {
  document.getElementById("success-message").hidden = true;
  document.getElementById("error-message").hidden = true;
};
const isUserValid = (userName, userPassword) => {
  return usersTable.some(user => user.username === userName && user.password === userPassword)
}

addEventListener("submit", (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(`email submitted: ${email}`);
  console.log(`password submitted: ${password}`);
  /*
    TODO:
    1. Check if the email and password are valid (using the usersTable) DONE
    2. If they are, call renderSuccess() DONE
    3. If they are not, call renderError() DONE
   */
  if (isUserValid(email, password)) {
    renderSuccess()
  } else {
    renderError()
  }
});
