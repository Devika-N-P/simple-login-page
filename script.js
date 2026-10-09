// 1. Select the form element from HTML
const loginForm = document.querySelector('form');

// 2. Listen for the 'Submit' button click event
loginForm.addEventListener('submit', function(event) {
    // This line stops the page from reloading automatically
    event.preventDefault();

    // 3. Get the values that the user typed in the inputs
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // 4. Simple check (Logic)
    if (usernameInput === "admin" && passwordInput === "1234") {
        alert("Login Successful! Welcome, " + usernameInput + " 🎉");
    } else {
        alert("Invalid Username or Password! Please try again. ❌");
    }
});
