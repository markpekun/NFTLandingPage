const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger-menu')
const menuClose = document.querySelector('.button-close')

burgerButton.addEventListener('click', this.burgerMenuOpen)
menuClose.addEventListener('click', this.closeBurgerMenu)

function burgerMenuOpen() {
    burgerMenu.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function closeBurgerMenu() {
    burgerMenu.style.display = 'none'
    document.body.style.overflow = 'scroll'
}