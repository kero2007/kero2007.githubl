/* ================= PROFILE ================= */
function loadProfile() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) return;

    document.getElementById("firstName").value = user.firstName || "";
    document.getElementById("lastName").value = user.lastName || "";
    document.getElementById("userName").value = user.username || "";
    document.getElementById("email").value = user.email || "";
    document.getElementById("password").value = user.password || "";

    document.getElementById("fullName").innerText = 
        (user.firstName || "") + " " + (user.lastName || "");
    
    document.getElementById("username").innerText = user.username || "";
    document.getElementById("emailView").innerText = user.email || "";
}

function saveProfile() {
    const user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        username: document.getElementById("userName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("currentUser", JSON.stringify(user));
    loadProfile();
    alert("Profile Updated ✅");
}

/* ================= THEME ================= */
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("ChangeTheme");
    const icon = btn.querySelector("i");

    // Load saved theme
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    
    icon.className = saved === "light" 
        ? "fa-solid fa-sun" 
        : "fa-solid fa-moon";

    btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");

        if (current === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            icon.className = "fa-solid fa-sun";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            icon.className = "fa-solid fa-moon";
        }
    });

    
});document.getElementById('logoutBtn').addEventListener('click', function() {

    localStorage.clear(); 
    sessionStorage.clear();


    alert("You have been logged out.");


    window.location.href = "login.html"; 
});