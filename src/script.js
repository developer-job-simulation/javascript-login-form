const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { id: 1, username: "hello@world.com", password: "badpassword" },
  { id: 2, username: "test@user.com", password: "badpassword" },
  { id: 3, username: "email@domain.com", password: "badpassword" },
];

const success = document.querySelector('#success-message')
const error = document.querySelector('#error-message')

let renderSuccess = () => {
  success.hidden = false
  error.hidden = true
};
let renderError = () => {
  error.hidden = false
  success.hidden = true
};
let resetMessage = () => {
  success.hidden = true
  error.hidden = true
};
const button = document.querySelector('.btn')
button.addEventListener("click", (event) => {
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
  for (let users of usersTable) {
    if (email === users.username && password !== users.password) {
      renderSuccess()
    } else {
      renderError()
    }
  }

});
