
// Toggle between registration and login forms
document.querySelectorAll("#toggle-form").forEach((link) => {
  link.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("registration-form").style.display =
          document.getElementById("registration-form").style.display === "none"
              ? "block"
              : "none";
      document.getElementById("login-form").style.display =
          document.getElementById("login-form").style.display === "none"
              ? "block"
              : "none";
  });
});

// Registration form submission
document.getElementById("registration-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Check if passwords match
  if (password !== confirmPassword) {
      document.getElementById("error-message").textContent = "Passwords do not match!";
      return;
  }

  try {
      const response = await fetch("/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      if (response.status === 201) {
          alert(result.message);
          // Clear the form fields
          document.getElementById("registration-form").reset();
          // Switch to login form
          document.getElementById("toggle-form").click();
      } else {
          document.getElementById("error-message").textContent = result.message;
      }
  } catch (error) {
      console.error("Error during registration:", error);
      document.getElementById("error-message").textContent = "Something went wrong.";
  }
});

// Login form submission
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  try {
      const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      if (response.status === 200) {
          alert(result.message);
          // Redirect to dashboard or home page
          window.location.href = "/dashboard";
      } else {
          document.getElementById("login-error-message").textContent = result.message;
      }
  } catch (error) {
      console.error("Error during login:", error);
      document.getElementById("login-error-message").textContent = "Something went wrong.";
  }
});
