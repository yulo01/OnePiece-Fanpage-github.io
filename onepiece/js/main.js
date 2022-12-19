// **************  Review Slider *******************
$(document).ready(function() {
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    })
});

// **************  Burger Menu *******************
let headerBurger = document.querySelector('.header__burger')
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
headerBurger.onclick = function() {
    headerBurger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
}