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

// Upload file
async function uploadFile() {
    const file = document.getElementById("file-input").files[0];
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch('http://localhost:5000/api/files/upload', {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    document.getElementById("upload-status").innerText = data.message;
}