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
        scrollOffset >= introH ? header.addClass('fixed') : header.removeClass('fixed');
    }

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

    // Accordion

    $('.accordion__item').click(function(e) {
        e.preventDefault();
        $('.accordion div').removeClass('active');
        $(this).addClass('active');
    });

    // Slider

    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false
    });
});
