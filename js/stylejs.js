window.addEventListener('load',()=>{
    document.querySelector('.main-header__boxs').style.gap = '1rem'
})

const backTopBtn = document.querySelector('.back-top')
window.addEventListener('scroll',()=>{
    const scrollBar = window.scrollY

    if (scrollBar > 30) {
        backTopBtn.classList.add('back-top--active')
    }else{
        backTopBtn.classList.remove('back-top--active')
    }
})
backTopBtn.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

