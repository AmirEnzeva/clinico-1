let $ = document;

let Body = $.body
let openMenuBtn = $.getElementById('open-menu')
let closeMenuBtn = $.getElementById('close-menu')
let menu = $.getElementById('menu')

let menuHandler = ()=>{
    if (!menu.classList.contains('menu--active')) {
        menu.classList.add('menu--active')
        Body.classList.add('over-flow-hidden')
    }else{
        menu.classList.remove('menu--active')
        Body.classList.remove('over-flow-hidden')
    }

}

openMenuBtn.addEventListener('click',menuHandler)
closeMenuBtn.addEventListener('click',menuHandler)
