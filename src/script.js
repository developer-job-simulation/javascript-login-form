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

  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;

  console.log(`email submitted: ${emailInput}`);
  console.log(`password submitted: ${passwordInput}`);
  /*
    TODO:
    1. Check if the email and password are valid (using the usersTable)
    2. If they are, call renderSuccess()
    3. If they are not, call renderError()
   */

    for(const {username, password} of usersTable)
    {
      if(emailInput === username && passwordInput === password)
      {
        renderSuccess()
        break
      } 
      else 
      {
        renderError()
        break
      }
    }
});
