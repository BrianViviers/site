$(document).ready(function () {
    var navbarHeight = $(".navbar").position().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > navbarHeight) {
            $('.navbar').addClass('navbar-fixed');
            $('#logo').addClass('logo-fixed');
        }
        if ($(window).scrollTop() < navbarHeight) {
            $('.navbar').removeClass('navbar-fixed');
            $('#logo').removeClass('logo-fixed');
        }
    });
    
    $("#year").text(new Date().getFullYear());

    $(".slider input[name='slide_switch']").on('click', function () {
        for (var i = 1; i <= 10; i++) {
            $(".slider #lets" + i).nextAll().eq(1).css('z-index', 10);
        }
        $(this).nextAll().eq(1).css('z-index', 3000);
    });

    $("#ants").animatedModal({
        modalTarget: 'antsModal'
    });
    $("#moose").animatedModal({
        modalTarget: 'mooseModal'
    });

    $("#compass").animatedModal({
        modalTarget: 'compassModal'
    });

    $("#threebody").animatedModal({
        modalTarget: 'threebodyModal'
    });

    $("#lets").animatedModal({
        modalTarget: 'letsModal'
    });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.portfolio-link').hover(
       function () {
           $('.portfolio-item-text-heading', this).addClass('semi-transparent')
           $('.portfolio-item-text', this).addClass('semi-transparent')
           $('.img-responsive', this).addClass('semi-transparent')
           $('.fa-search-plus', this).removeClass('disappear')
       },
       function () {
           $('.portfolio-item-text-heading', this).removeClass('semi-transparent')
           $('.portfolio-item-text', this).removeClass('semi-transparent')
           $('.img-responsive', this).removeClass('semi-transparent')
           $('.fa-search-plus', this).addClass('disappear')
       }
    )
});