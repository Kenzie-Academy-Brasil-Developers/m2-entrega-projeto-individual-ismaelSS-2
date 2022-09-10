const buttonNav =document.querySelector('.button-menu')
const menuNav = document.querySelector('.nav')

buttonNav.addEventListener('click', () =>{
    buttonNav.classList.toggle('button-menu-close')
    menuNav.classList.toggle('nav-visivel')
})