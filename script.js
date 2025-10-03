document.addEventListener("DOMContentLoaded", () => {
  // 1. Select form and feedback div
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // 2. Add event listener to form
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // 3. Retrieve and trim user inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // 4. Validation variables
    let isValid = true;
    let messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation
    if (!(email.includes("@") && email.includes("."))) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // 5. Feedback display logic
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // red
    }
  });
});
