
const loginButton = document.getElementById("login-btn");
const registerButton = document.getElementById("register-btn");


loginButton.addEventListener("click", () => {
    loginButton.style.display = "none"; 
    registerButton.style.display = "none"; 
});


registerButton.addEventListener("click", () => {
    registerButton.style.display = "none"; 
    loginButton.style.display = "none"; 
});
