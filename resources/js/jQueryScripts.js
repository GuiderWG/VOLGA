export default $(document).ready(() => {

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


});