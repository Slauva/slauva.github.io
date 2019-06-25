// Works
$('#btnWorks').click(function() {
    $('#gallery').show();
    $('#btnWorks').fadeOut(300);
});
// Nav toggle
$('.nav-toggle').click(function() {
    $('.nav-toggle').hasClass('active') ? $('.nav-toggle').removeClass('active') : $('.nav-toggle').addClass('active');
    $('.header').hasClass('active') ? $('.header').removeClass('active') : $('.header').addClass('active');
});
//  Menu
$('.header__link').click(function() {
    if (innerWidth <= 1024) {
        $('.nav-toggle').hasClass('active') ? $('.nav-toggle').removeClass('active') : $('.nav-toggle').addClass('active');
        $('.header').hasClass('active') ? $('.header').removeClass('active') : $('.header').addClass('active');
    }
});
// Carusel
$(document).ready(function() {
    $('.reviews').slick({
        dots: false,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    });
});
