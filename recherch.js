// recherch_input
const text_recherch = document.querySelector('.text_recherch')
const icon_recherch = document.querySelector('.icon_recherch')

icon_recherch.addEventListener('click',()=>{
    text_recherch.classList.toggle('input_search')
})
