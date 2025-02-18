const API_URL = "http://localhost:5000/api/auth";

// Register user
async function registerUser() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (response.ok) {
        alert("Registration successful! Redirecting to login...");
        window.location.href = "login.html";
    } else {
        alert(data.message);
    }
}

// Login user
async function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert(data.message);
    }
}

// Logout function
function logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out!");
    window.location.href = "login.html";
}