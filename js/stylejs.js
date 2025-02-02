
const backTopBtn = document.querySelector('.back-top')
window.addEventListener('scroll',()=>{
    const scrollBar = window.scrollY

    if (scrollBar > 30) {
        backTopBtn.classList.add('back-top--active')
    }else{
        backTopBtn.classList.remove('back-top--active')
    }
})
backTopBtn.addEventListener('mouseup',()=>{
    window.scrollTo(0,0)
    backTopBtn.classList.remove('onclick');

})
backTopBtn.addEventListener('mousedown',()=>{
    backTopBtn.classList.add('onclick');
})

