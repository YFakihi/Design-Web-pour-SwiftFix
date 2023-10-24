

const faqs = document.querySelectorAll('.faqs')

faqs.forEach((faqs) =>{
    faqs.addEventListener('click',() =>{
        faqs.classList.toggle("active");
    })
})
// scipt for menau_hambarger
const menuHamburger = document.querySelector(".menu")
const navLinks = document.querySelector(".navbar")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})


const text_recherch = document.querySelector('.text_recherch')
const icon_recherch = document.querySelector('.icon_recherch')

icon_recherch.addEventListener('click',()=>{
    text_recherch.classList.toggle('input_search')
})



const form = document.querySelector("#form");
const nom = document.querySelector("#nom");
const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const serviceSelect = document.querySelector("#choix");
const message = document.querySelector("#message");
const messagevalidation = document.querySelector("#messagevalidation");



form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;


    if (nom.value.trim() == "") {
        document.getElementById("nameError").textContent = "votre nom";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (tel.value.trim() == "") {
        document.getElementById("phoneError").textContent = "votre phone";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById("emailError").textContent = "Valid email ";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (serviceSelect.value == "choidefault") {
        document.getElementById("serviceError").textContent = "choisir un service";
        isValid = false;
    } else {
        document.getElementById("serviceError").textContent = "";
    }

    if (message.value.trim() == "") {
        document.getElementById("messageError").textContent = "comentaire";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    if (isValid) {
        messagevalidation.textContent = "Form submitted successfully!";
        form.reset();
    }
});



