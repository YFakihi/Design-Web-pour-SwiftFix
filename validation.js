const form = document.querySelector("#form");
const nom = document.querySelector("#nom");
const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const serviceSelect = document.querySelector("#choix");
const message = document.querySelector("#message");
const messagevalidation = document.querySelector("#successMessage");

const phonePattern = /^[0-9]{10}$/; 
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    if (nom.value.trim() === "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (tel.value.trim() === "") {
        document.getElementById("phoneError").textContent = "Please enter your phone number.";
        isValid = false;
    } else if (!phonePattern.test(tel.value.trim())) {
        document.getElementById("phoneError").textContent = "Invalid phone number (10 digits).";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        document.getElementById("emailError").textContent = "Invalid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (serviceSelect.value === "choidefault") {
        document.getElementById("serviceError").textContent = "Please choose a service.";
        isValid = false;
    } else {
        document.getElementById("serviceError").textContent = "";
    }

    if (message.value.trim() === "") {
        document.getElementById("messageError").textContent = "Please enter a comment.";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    if (isValid) {
        messagevalidation.textContent = "Form submitted successfully!";
        form.reset();
    }
});
