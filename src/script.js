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
  /*
    TODO:
    1. Check if the email and password are valid (using the usersTable)
    2. If they are, call renderSuccess()
    3. If they are not, call renderError()
   */

  let authUser = usersTable.find((user) => email === user.username && password === user.password);
  //
  // if (authUser) {
  //   renderSuccess()
  // } else {
  //   renderError()
  // }
  console.log(authUser)
  if (!!authUser) renderSuccess()
  if (!!(!authUser)) renderError()
});

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}