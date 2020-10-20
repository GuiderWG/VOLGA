export default $(document).ready(() => {

    /*Fixed menu*/
    $(window).scroll(function() {

        let topMenu = $('.top-menu');
        topMenu.removeClass('fixed-top');
        if ($(this).width() >= 320) {
            let header = $('.header');
            if ($(this).scrollTop() > header.outerHeight()) {
                topMenu.addClass('fixed-top');
                header.css({'marginBottom': `${topMenu.outerHeight()}px`});
            } else {
                topMenu.removeClass('fixed-top');
                header.css({'marginBottom': `0`});
            }
        }
    }).scroll();
    /*-----*/

    /* TOP MENU DROPDOWN 2LVL */
    $('.navbar-main__item_dropdown').hover(
        function() {
            $(this)
                .addClass('navbar-main__item_dropdown_open')
                .find('.main-menu-level')
                .stop()
                .fadeIn('50');
        },
        function() {
            $(this)
                .removeClass('navbar-main__item_dropdown_open')
                .find('.main-menu-level')
                .stop()
                .fadeOut('50');
        },
    );
    /*---*/

    /* Mobile menu */
    let menuLink = $('.mobile-menu-btn');
    $('#mobile-nav').hcOffcanvasNav({
        width: '55%',
        disableAt: 992,
        customToggle: menuLink,
        labelClose: $('<img src="/images/logo.svg" alt="" class="logo__img logo__img_mobile img-fluid">'),
        labelBack: 'Назад',

    });
    /* END Mobile menu */

    if ($.fn.slick) {
        $('.main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            asNavFor: '.slider-nav',
            speed: 800,
            fade: true,
        });

        $('.slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            asNavFor: '.main-slider',
            variableWidth: true,
            arrows: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 400000,
            speed: 300,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: '<img class="a-left control-c prev slick-prev" src="/images/icons/prev.svg" alt="">',
            nextArrow: '<img class="a-right control-c next slick-next" src="/images/icons/next.svg" alt="">',
        });

    }

});