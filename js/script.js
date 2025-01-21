let $ = document;


// menu
let menuBtn = $.querySelector('.menu-btn')
let menuBtnClose = $.querySelector('.exit-btn')
let menu = $.querySelector('.menu')
let cover = $.querySelector('.cover')
console.log(cover);
menuBtn.addEventListener('click',slidShow)
menuBtnClose.addEventListener('click',slidShow)
cover.addEventListener('click',slidShow)

function slidShow() {
    cover.classList.toggle('cover--active')
    menu.classList.toggle('menu--active')
}
// /menu

