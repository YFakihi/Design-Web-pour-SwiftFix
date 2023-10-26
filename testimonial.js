document.addEventListener('DOMContentLoaded',function(){
const carousl = document.querySelector('.Testimonials')
const item = document.querySelectorAll('.Text_testimonial1')
let width = item[0].clientWidth
let index = 0
function carousel(){
    index = (index + 1) % item.length
    let trans = -index * width
    carousl.style.transform = `translateX(${trans}px)`
}
setInterval(carousel,1000)

})