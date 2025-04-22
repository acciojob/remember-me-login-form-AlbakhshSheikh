window.onload = function () {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        document.getElementById("existing").style.display = "block";
    }

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("checkbox").checked;

        alert(`Logged in as ${username}`);

        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            document.getElementById("existing").style.display = "block";
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            document.getElementById("existing").style.display = "none";
        }
    });

    document.getElementById("existing").addEventListener("click", function () {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });
};