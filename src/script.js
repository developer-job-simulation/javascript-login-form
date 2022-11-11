const usersTable = [
	// Note: This is a fake table for educational purposes. Never store user credentials in plain text.
	{ id: 1, username: 'hello@world.com', password: 'badpassword' },
	{ id: 2, username: 'test@user.com', password: 'badpassword' },
	{ id: 3, username: 'email@domain.com', password: 'badpassword' },
];
const renderSuccess = () => {
	document.getElementById('success-message').hidden = false;
};
const renderError = () => {
	document.getElementById('error-message').hidden = false;
};
const resetMessage = () => {
	document.getElementById('success-message').hidden = true;
	document.getElementById('error-message').hidden = true;
};

addEventListener('submit', (event) => {
	event.preventDefault();
	resetMessage();

	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	if (
		usersTable.some(({ username, password: storedPassword }) => {
			return username === email && password == storedPassword;
		})
	) {
		renderSuccess();
		console.log(`email submitted: ${email}`);
		console.log(`password submitted: ${password}`);
	} else renderError();
});
