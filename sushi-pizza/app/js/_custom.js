$('.slider').slick({});
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

    $('.ham').on('click', function(event) {
        event.preventDefault();
        var $this = $(this);
        var $menu = $('.navbar');
        if($this.attr('class').split(' ')[3] == 'active'){
            $menu.css('display', 'block');
            $('.nav').css('position', 'fixed');
        }
        else{
            $menu.css('display', 'none');
            $('.nav').css('position', 'absolute');
        }
    });
    $('.navbar__link').on('click', function(event) {
        event.preventDefault();
        var $menu = $('.navbar');
        var $menu_btn = $('.ham');

        if($menu_btn.attr('class').split(' ')[3] == 'active'){
            $menu.css('display', 'none');
            $menu_btn.removeClass('active');
            $('.nav').css('position', 'absolute');
        }
    });
});

