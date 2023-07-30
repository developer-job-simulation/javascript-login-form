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
  let user = usersTable.find((user) => user.username === email);
  if (user === undefined) {
    renderError();
    return;
  } else {
    console.log(`user found: ${user.username}`);
    if (user.password === password) {
      renderSuccess();
    }
  }
});
