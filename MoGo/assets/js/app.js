$(function() {
    var introH = $('#intro').innerHeight();
    var header = $('#header');
    var scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        // console.log(scrollOffset);
        scrollOffset >= introH ? header.addClass('fixed') : header.removeClass('fixed');
    }
});

// Smooth scroll
$('[data-scroll]').on('click', function(event) {
    event.preventDefault();
    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;
    $('.nav a').removeClass('active');
    $this.addClass('active');
    $('html, body').animate(
        {
            scrollTop: blockOffset
        },
        500
    );
});

// Nav toggle

$('.nav-toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this),
        nav = $('.nav');
    nav.toggleClass('active');
    $this.toggleClass('active');
});
