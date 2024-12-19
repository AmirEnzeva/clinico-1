let $ = document;


// menu
let menuBtn = $.querySelector('.menu-btn')
let menuCloseBtn = $.querySelector('.menu-close-btn')
let menu = $.querySelector('.menu')
let cover = $.querySelector('.cover')
let isMeunOpen = false

menuBtn.addEventListener('click', slideMenu)
menuCloseBtn.addEventListener('click', slideMenu)
cover.addEventListener('click',()=>{
    if (isMeunOpen) {
        slideMenu()
    }
})
function slideMenu(){
    menu.classList.toggle('menu--active')
    cover.classList.toggle('cover-t')
    isMeunOpen = !isMeunOpen
}
// /menu

// mini-menu

let miniMenuBtn = $.querySelectorAll('.menu-item__mini-menu-btn')
let miniMenu = null;
let miniMenuIcon = $.querySelector('.mini-menu__item-icon')

miniMenuBtn.forEach(menuItem => {
   menuItem.addEventListener('click',() =>{
        miniMenu = $.querySelector(`#${menuItem.getAttribute('data-menuId')}`)
        if (miniMenu.classList.contains('mini-menu--active')) {
            miniMenu.classList.remove('mini-menu--active')
        } else {
            closeAllMiniMenu()
            miniMenu.classList.add('mini-menu--active')
        }
   })
})

function closeAllMiniMenu(){
    if ($.querySelector('.mini-menu--active')) {

        $.querySelector('.mini-menu--active').classList.remove('mini-menu--active')
    }
}

// /mini-menu
