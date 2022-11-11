const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { id: 1, username: "hello@world.com", password: "badpassword" },
  { id: 2, username: "test@user.com", password: "badpassword" },
  { id: 3, username: "email@domain.com", password: "badpassword" },
];

function validateUser(email, password) {
  let isValidUser = false;
  usersTable.forEach((obj) => {
    if (obj.username === email && obj.password === password) isValidUser = true;
  });

  return isValidUser;
}

module.exports = validateUser;
