const cross = document.getElementsByClassName('nav__cross')[0]
const hamburger = document.getElementsByClassName('nav__hamburger')[0]
const menu = document.getElementsByClassName('nav__menu')[0]
const hero = document.getElementsByClassName('hero')[0]


cross.addEventListener('click',nav)
hamburger.addEventListener('click',nav)

function nav() {
    menu.classList.toggle('show')
    hero.classList.toggle('gradient')
    hamburger.classList.toggle('hide')
    cross.classList.toggle('hide')
}