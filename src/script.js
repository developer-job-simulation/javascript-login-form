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


let checkValidEmail = (email, char) => {
  console.log(char)
  if (!email.includes(char)) {
    document.getElementById("invalidEmail").innerHTML = `Please include an '@' in the email adress. ${email} is missing an '@'.`;
    document.getElementById("invalidEmail").hidden = false;

    console.log(`please include an @ in the email adress. ${email} is missing an @`)
  } else {
    document.getElementById("invalidEmail").hidden = true;

  }

}

/*let getExactMatch = (userList, user) => {
  userList.filter(obj => {
    if (obj.username === user.username && obj.password === user.password) {
      renderSuccess()
    }
  })
}
*/

let checkUserPassMatch = (userList, user) => {
  var success = false
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].username === user.username && userList[i].password === user.password) {
      success = true
      renderSuccess()
      break
    }
    if (i === userList.length - 1 && success === false) {
      renderError()
    }
  }
}

addEventListener("submit", (event) => {
  const char = '@'
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value;
  checkValidEmail(email, char);

  let password = document.getElementById("password").value;


  console.log(`email submitted: ${email}`);
  console.log(`password submitted: ${password}`);

  const currentUserPasswordCombo = { username: email, password: password }

  checkUserPassMatch(usersTable, currentUserPasswordCombo)

  //getExactMatch(usersTable, currentUserPasswordCombo)

  /* for( var i = 0; i < usersTable.length;i++){
     if (email === usersTable[i].username){
       console.log('username matches email')
       if (password === usersTable[i].password){
       console.log('password match')
       renderSuccess()
       break
       }
       renderError()
       console.log('wrong password')
       
     }
     renderError()
     console.log('no match')
   } 
   
 
 
   /*
     TODO:
     1. Check if the email and password are valid (using the usersTable)
     2. If they are, call renderSuccess()
     3. If they are not, call renderError()
    */
});
