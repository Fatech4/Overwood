const toggleButton= document.querySelector('#menu_toggle');

const mobileNav= document.querySelector('.mobile-nav');
console.log(mobileNav);
toggleButton.addEventListener('click',function(){

    toggleButton.classList.toggle('active');
    mobileNav.classList.toggle('active');

})