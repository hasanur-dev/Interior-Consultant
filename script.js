const navBtn = document.getElementById('nav-btn')

const mobileNav = document.getElementById('mobile-nav')

const clearNavBtn =  document.getElementById('icon-clear')

console.log(mobileNav);

let width = window.innerWidth;
console.log(width);

if(width > 640){
    mobileNav.classList.remove('not-visible')
}

window.addEventListener('resize', ()=>{
    width = window.innerWidth
    if(width > 640){
        mobileNav.classList.remove('not-visible')
    }else{
        mobileNav.classList.add('not-visible')
    }
})
console.log(mobileNav);
console.log(mobileNav);


navBtn.addEventListener('click',()=>{
    console.log('hi');
})

navBtn.addEventListener('click',()=>{
    mobileNav.classList.toggle('visible')
    mobileNav.classList.toggle('not-visible')

})
clearNavBtn.addEventListener('click',()=>{
    mobileNav.classList.toggle('visible')
    mobileNav.classList.toggle('not-visible')
})

