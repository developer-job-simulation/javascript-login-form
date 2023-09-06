const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { id: 1, username: "hello@world.com", password: "badpassword" },
  { id: 2, username: "test@user.com", password: "badpassword2" },
  { id: 3, username: "email@domain.com", password: "badpassword3" },
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

  //console.log(`email submitted: ${email}`);
  //console.log(`password submitted: ${password}`);
  /*
    TODO:
    1. Check if the email and password are valid (using the usersTable)
    2. If they are, call renderSuccess()
    3. If they are not, call renderError()
   */

  const foundUser = usersTable.find((user) => {
    return email === user.username && password === user.password;
  });

  if (foundUser) {
    renderSuccess()
    console.log("success message is true")
  } else {
    renderError()
    console.log("error message is true")
  }




    /*
  let foundMatch = false

  usersTable.forEach((user) => {
    const username = user.username;
    const pass = user.password;

    if (email === username && pass === password) {
      foundMatch = true;
      renderSuccess()
      console.log("success message is true")
      console.log(username, pass)
    } 
    
    if (!foundMatch) {
      renderError()
      console.log("error message is true")
    }
      
  })*/
})
    


