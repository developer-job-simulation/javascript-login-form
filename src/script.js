const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { id: 1, username: "hello@world.com", password: "badpassword" },
  { id: 2, username: "test@user.com", password: "badpassword" },
  { id: 3, username: "email@domain.com", password: "badpassword" },
];
let renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
};
let renderError = () => {
  document.getElementById("error-message").hidden = false;
};
let resetMessage = () => {
  document.getElementById("success-message").hidden = true;
  document.getElementById("error-message").hidden = true;
};

addEventListener("submit", (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(`email submitted: ${email}`);
  console.log(`password submitted: ${password}`);

  let validCredentials = false; //initially set to false, and will be set to true if the email and password match any of the objects in the `usersTable` array.

  usersTable.forEach(user => {
    if (email === user.username && password === user.password) {
      validCredentials = true;
    }
  }); //this iterates over the `usersTable` array, and checks if the email and password match any of the objects in the array. If there is at least one match, the `validCredentials` variable is set to `true`.

  if (validCredentials) {
    renderSuccess();
  } else {
    renderError();
  }; //this checks if the `validCredentials` variable is set to `true`. If it is, it calls the `renderSuccess()` function. If it is not, it calls the `renderError()` function.
  /*
    TODO:
    1. Check if the email and password are valid (using the usersTable)
    2. If they are, call renderSuccess()
    3. If they are not, call renderError()
   */
});
