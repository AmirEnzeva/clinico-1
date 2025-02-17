let $ = document;

let Body = $.body
let openMenuBtn = $.getElementById('open-menu')
let closeMenuBtn = $.getElementById('close-menu')
let menu = $.getElementById('menu')

let menuHandler = ()=>{
    if (!menu.classList.contains('menu--active')) {
        menu.classList.add('menu--active')
    }else{
        menu.classList.remove('menu--active')
    }
    
}

function closeHandler(){
    
}

openMenuBtn.addEventListener('click',menuHandler)
closeMenuBtn.addEventListener('click',menuHandler)
window.addEventListener('scroll',() => menu.classList.remove('menu--active'))

