// scipt for menau_hambarger
const menuHamburger = document.querySelector(".menu")
const navLinks = document.querySelector(".navbar")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})