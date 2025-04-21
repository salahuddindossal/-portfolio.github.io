let users = [];

// Signup
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let userId = document.getElementById("signupId").value;
    let userPassword = document.getElementById("signupPassword").value;

    let userExists = users.some(user => user.id === userId);
    if (userExists) {
        alert("User already exists! Try a different ID.");
        return;
    }

    users.push({ id: userId, password: userPassword });
    alert("Signup successful! You can now log in.");
    document.getElementById("signupForm").reset();
    bootstrap.Modal.getInstance(document.getElementById("signupModal")).hide();
});

// Signin
document.getElementById("signinForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let loginId = document.getElementById("signinId").value;
    let loginPassword = document.getElementById("signinPassword").value;

    let userFound = users.find(user => user.id === loginId && user.password === loginPassword);
    if (userFound) {
        alert("Login successful!");
        bootstrap.Modal.getInstance(document.getElementById("signinModal")).hide();
    } else {
        alert("User not found!");
    }

    document.getElementById("signinForm").reset();
});
