// Run when the page loads
window.onload = function () {
    // Check if credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        // Show the "Login as existing user" button
        document.getElementById("existing").style.display = "block";
    }

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("checkbox").checked;

        // Show login alert
        alert(`Logged in as ${username}`);

        // Handle "Remember Me" functionality
        if (rememberMe) {
            // Store credentials in localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            // Show the "Login as existing user" button
            document.getElementById("existing").style.display = "block";
        } else {
            // Remove credentials from localStorage
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            // Hide the "Login as existing user" button
            document.getElementById("existing").style.display = "none";
        }
    });

    // Handle "Login as existing user" button click
    document.getElementById("existing").addEventListener("click", function () {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });
};