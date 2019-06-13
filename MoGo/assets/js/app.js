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

    // Smooth scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
        var blockId = $(this).data('scroll');
    });
});
