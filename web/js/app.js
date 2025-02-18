document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        document.getElementById("user-info").innerText = `Welcome, ${user.username}`;
        document.getElementById("logout-btn").classList.remove("hidden");
    }
});