const usersTable = [
  { id: 1, username: "hello@world.com", password: "badpassword" },
  { id: 2, username: "test@user.com", password: "badpassword" },
  { id: 3, username: "email@domain.com", password: "badpassword" },
];

let renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
  console.log('success!');
};

let renderError = () => {
  console.log('error!');
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

  for(users in usersTable){
    if(users.username == email && users.password == password){
      renderSuccess();
      return;
    } else {
      renderError();
    }
  }
});
