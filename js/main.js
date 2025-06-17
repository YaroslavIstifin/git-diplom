'use strict';

const lid = document.querySelector('.lid');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const boundingRect = entry.boundingClientRect;
            const centerY = window.innerHeight / 2;
            const lidHeight = boundingRect.height;
            const midLid = boundingRect.top + lidHeight / 2;

            if (midLid < centerY) {
                // Прокрутка вниз
                const progress = 1 - (midLid / (centerY));
                lid.style.transform = `rotate(${70 * progress}deg)`; // Открытие
            } else {
                // Прокрутка вверх
                const progress = (midLid - centerY) / (window.innerHeight / 2);
                lid.style.transform = `rotate(${70 + (- 70 * progress)}deg)`; // Закрытие
            }
        } else {
            lid.style.transform = `rotate(0deg)`; // Закрыто, когда не в зоне видимости
        }
    });
});

// Наблюдение за элементом (предположим, что ваша крышка имеет определенный класс)
const lidElement = document.querySelector('.lid');
observer.observe(lidElement);

// Инициализация для закрытого состояния
lid.style.transform = `rotate(0deg)`;









(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------------
        Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 2,
        dots: true,
        // autoplay: true,
        loop: true,
        smartSpeed: 1200,
        margin: 0,
        responsive: {
            320: {
                items: 1,
            },
            480: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Counter Up
    --------------------*/
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
        About Counter Up
    --------------------*/
    $('.ab-count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);