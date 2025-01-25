// Select the form and its elements
const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const loginErrorMessage = document.getElementById('login-error-message');
const toggleForm = document.getElementById('toggle-form');

// Registration form submission event
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  // Get user input values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  // Basic validation
  if (!username || !email || !password || !confirmPassword) {
    errorMessage.textContent = 'All fields are required!';
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match!';
    return;
  }

  if (password.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long.';
    return;
  }

  // Success message
  errorMessage.style.color = 'green';
  errorMessage.textContent = 'Registration successful!';
  registrationForm.reset(); // Clear form
});

// Login form submission event
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  // Get user input values
  const loginUsername = document.getElementById('login-username').value.trim();
  const loginPassword = document.getElementById('login-password').value.trim();

  // Basic validation
  if (!loginUsername || !loginPassword) {
    loginErrorMessage.textContent = 'Both fields are required!';
    return;
  }

  // Success message
  loginErrorMessage.style.color = 'green';
  loginErrorMessage.textContent = 'Login successful!';
  loginForm.reset(); // Clear form
});

// Toggle between registration and login forms
toggleForm.addEventListener('click', (event) => {
  event.preventDefault();
  registrationForm.style.display = registrationForm.style.display === 'none' ? 'block' : 'none';
  loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
  errorMessage.textContent = '';
  loginErrorMessage.textContent = '';
});
