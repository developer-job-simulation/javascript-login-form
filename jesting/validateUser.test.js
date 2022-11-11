const validateUser = require("./validateUser");

test("validate credentials to be true", () => {
  expect(validateUser("hello@world.com", "badpassword")).toBe(true);
});

test("validate credentials to be true", () => {
  expect(validateUser("test@user.com", "badpassword")).toBe(true);
});

test("validate credentials to be true", () => {
  expect(validateUser("email@domain.com", "badpassword")).toBe(true);
});

test("validate credentials to be true", () => {
  expect(validateUser("kdfa@sup.com", "badpassword")).toBe(false);
});
